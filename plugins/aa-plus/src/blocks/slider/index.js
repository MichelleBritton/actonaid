import { registerBlockType } from "@wordpress/blocks";
import {
  InspectorControls,
  MediaUpload,
  RichText,
  URLInput,
} from "@wordpress/block-editor";
import { PanelBody, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import block from "./block.json";

registerBlockType(block.name, {
  edit({ attributes, setAttributes, isSelected }) {
    // Local state to manage item additions before syncing back to attributes
    const [items, setItems] = useState(attributes.items || []);

    // Function to add a new empty item (without an image)
    const handleAddItem = () => {
      const newItems = [
        ...items,
        { id: Date.now(), image: "", title: "", ctaText: "", ctaUrl: "" },
      ];
      setItems(newItems);
      setAttributes({ items: newItems });
    };

    // Function to handle image upload for a specific item
    const handleImageSelect = (image, index) => {
      const newItems = [...items];
      const imageSizes = image.sizes || {};

      // Construct srcSet from available image sizes
      const srcSet = `
        ${imageSizes.thumbnail?.url} 150w,
        ${imageSizes.medium?.url} 300w,
        ${imageSizes.small?.url} 620w,
        ${imageSizes.large?.url} 1024w,
        ${imageSizes.full?.url} 1600w       
      `;

      // Now add the srcSet to the image object
      newItems[index].image = {
        url: image.url, // The default/original image URL
        srcSet: srcSet, // The srcSet we've just built
        sizes:
          "(max-width: 600px) 620px, (min-width: 601px) and (max-width: 1024px) 1024px, (min-width: 1025px) and (max-width: 1600px) 1600px, 100vw", // Breakpoints for loading different sizes
      };

      setItems(newItems);
      setAttributes({ items: newItems });
    };

    // Function to delete an item (remove the image from the array)
    const handleDeleteItem = (index) => {
      const newItems = items.filter((_, i) => i !== index); // Remove the item by filtering it out
      setItems(newItems); // Update local state
      setAttributes({ items: newItems }); // Sync with WordPress block attributes
    };

    // Define styles for the editor preview to make the carousel easier to edit
    const editorStyles = {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
    };

    const itemStyles = {
      width: "100%",
      height: "500px",
      border: "1px dashed #ccc",
      padding: "10px",
      overflow: "hidden",
      position: "relative",
    };

    const buttonStyles = {
      fontSize: "16px",
      fontWeight: "bold",
      display: "block",
      width: "100%",
      height: "auto",
      overflow: "hidden",
    };

    const titleStyles = {
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "bold",
      border: "1px dashed #ccc",
      padding: "5px",
      backgroundColor: "#fff",
      cursor: "text",
    };

    const LinkStyles = {
      display: "block",
      textAlign: "center",
      marginTop: "10px",
      color: "#000",
    };

    const deleteButtonStyles = {
      position: "absolute",
      top: "10px",
      right: "10px",
      zIndex: 3,
      backgroundColor: "red",
      color: "white",
      padding: "5px 8px",
      border: "none",
      borderRadius: "3px",
      cursor: "pointer",
    };

    return (
      <>
        <InspectorControls>
          <PanelBody title="Carousel Settings">
            <Button onClick={handleAddItem}>Add a slider image</Button>
          </PanelBody>
        </InspectorControls>

        {/* Display carousel as grid in editor for easier editing */}
        <div
          className="carousel-editor-preview"
          style={editorStyles} // Apply grid layout in the editor
        >
          {items.map((item, index) => (
            <div key={item.id} style={itemStyles}>
              {/* Image Upload Section */}
              <div>
                <MediaUpload
                  onSelect={(image) => handleImageSelect(image, index)}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button
                      onClick={open}
                      className="button button-large"
                      style={buttonStyles}
                    >
                      {item.image ? (
                        <img
                          src={item.image.url}
                          srcSet={item.image.srcSet}
                          sizes={item.image.sizes}
                          className="size-full object-cover"
                          alt={`Acton Aid ${index + 1}`}
                        />
                      ) : (
                        "Upload Image"
                      )}
                    </Button>
                  )}
                />
              </div>

              {/* Title Field */}
              <div style={{ marginTop: "10px", width: "100%" }}>
                <RichText
                  tagName="h2"
                  value={item.title || ""}
                  onChange={(title) => {
                    const newItems = [...items];
                    newItems[index] = { ...newItems[index], title };
                    setItems(newItems);
                    setAttributes({ items: newItems });
                  }}
                  placeholder="Enter slide title..."
                  style={titleStyles}
                />
              </div>

              {/* Link Text */}
              <RichText
                tagName="a"
                value={item.ctaText || ""}
                onChange={(ctaText) => {
                  const newItems = [...items];
                  newItems[index] = { ...newItems[index], ctaText };
                  setItems(newItems);
                  setAttributes({ items: newItems });
                }}
                placeholder="Enter button text..."
                className="text-base btn-animate md:text-lg lg:text-xl"
                style={LinkStyles}
              />

              {/* Link URL */}
              <URLInput
                value={item.ctaUrl || ""}
                onChange={(ctaUrl) => {
                  const newItems = [...items];
                  newItems[index] = { ...newItems[index], ctaUrl };
                  setItems(newItems);
                  setAttributes({ items: newItems });
                }}
              />

              {/* Delete Button */}
              <button
                style={deleteButtonStyles}
                onClick={() => handleDeleteItem(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </>
    );
  },

  save({ attributes }) {
    const { items = [] } = attributes;
    return (
      <div class="relative z-0 h-[80vh] w-full overflow-hidden">
        <div
          id="carousel"
          class="flex transition-transform duration-700 ease-in-out"
        >
          {items.map((item, index) => (
            <div
              className="relative h-[80vh] w-full flex-shrink-0"
              key={item.id}
            >
              <div className="absolute flex size-full items-center justify-center">
                {item.title && (
                  <h2 className="flex flex-col items-center px-8 py-4 text-center text-4xl text-white repeating-diagonal-gradient md:text-6xl xl:text-8xl">
                    <RichText.Content value={item.title} />
                    {item.ctaUrl && (
                      <a
                        href={item.ctaUrl}
                        className="text-base btn-animate md:text-lg lg:text-xl"
                      >
                        <RichText.Content value={item.ctaText} />
                      </a>
                    )}
                  </h2>
                )}
              </div>
              {item.image ? (
                <img
                  src={item.image.url} // The main image URL
                  srcSet={item.image.srcSet} // Responsive image set
                  sizes={item.image.sizes} // Responsive size rules
                  className="size-full object-cover"
                  alt={`Acton Aid Slide ${index + 1}`}
                />
              ) : null}
            </div>
          ))}
        </div>
        <div
          id="carousel-indicators"
          class="absolute bottom-28 left-1/2 flex -translate-x-1/2 transform space-x-2"
        ></div>
      </div>
    );
  },
});

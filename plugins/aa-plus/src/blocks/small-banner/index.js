import { registerBlockType } from "@wordpress/blocks";
import apiFetch from "@wordpress/api-fetch";
import {
  useBlockProps,
  InspectorControls,
  ColorPalette,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { PanelBody, Button } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import block from "./block.json";

registerBlockType(block.name, {
  edit({ attributes, setAttributes }) {
    const { imgID, imgURL, bgColor, textColor } = attributes;
    const blockProps = useBlockProps({
      style: {
        backgroundColor: bgColor,
        color: textColor,
        ...(imgURL ? { backgroundImage: `url(${imgURL})` } : {}),
      },
    });

    useEffect(
      function () {
        if (imgID) {
          async function go() {
            const response = await apiFetch({
              path: `/wp/v2/media/${imgID}`,
              method: "GET",
            });
            setAttributes({
              imgURL: response.source_url,
            });
          }
          go();
        }
      },
      [imgID]
    );

    function onFileSelect(x) {
      setAttributes({ imgID: x.id });
    }

    return (
      <>
        <InspectorControls>
          <PanelBody title="Colors" initialOpen={true}>
            <p>Background Color</p>
            <ColorPalette
              value={bgColor}
              onChange={(color) => setAttributes({ bgColor: color })}
            />
            <p>Text Color</p>
            <ColorPalette
              value={textColor}
              onChange={(color) => setAttributes({ textColor: color })}
            />
          </PanelBody>
          <PanelBody title="Background Image" initialOpen={true}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>;
                }}
              />
            </MediaUploadCheck>
          </PanelBody>
        </InspectorControls>
        <section
          {...blockProps}
          className="mb-2 w-full bg-cover bg-no-repeat px-[10%] py-10 text-center"
        >
          <InnerBlocks
            allowedBlocks={["core/heading", "core/paragraph", "core/button"]}
          />
        </section>
      </>
    );
  },
  save({ attributes }) {
    const { imgID, imgURL, bgColor, textColor } = attributes;
    const blockProps = useBlockProps.save({
      style: {
        backgroundColor: bgColor,
        color: textColor,
        ...(imgURL ? { backgroundImage: `url(${imgURL})` } : {}),
      },
    });

    return (
      <section
        {...blockProps}
        className="mb-2 w-full bg-cover bg-no-repeat px-[10%] py-10 text-center"
      >
        <InnerBlocks.Content />
      </section>
    );
  },
});

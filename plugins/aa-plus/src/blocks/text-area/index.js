import { registerBlockType } from "@wordpress/blocks";
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
  InnerBlocks,
} from "@wordpress/block-editor";
import block from "./block.json";

registerBlockType(block.name, {
  edit({ attributes, setAttributes }) {
    const { bgColor, textColor } = attributes;
    const blockProps = useBlockProps({
      style: { backgroundColor: bgColor, color: textColor },
    });

    return (
      <>
        <InspectorControls>
          <PanelColorSettings
            title="Color Settings"
            colorSettings={[
              {
                value: bgColor,
                onChange: (color) => setAttributes({ bgColor: color }),
                label: "Background Color",
              },
              {
                value: textColor,
                onChange: (color) => setAttributes({ textColor: color }),
                label: "Text Color",
              },
            ]}
          />
        </InspectorControls>
        <section
          {...blockProps}
          className="mx-auto w-[90%] py-16 text-center md:w-[70%]"
        >
          <InnerBlocks
            allowedBlocks={[
              "core/heading",
              "core/paragraph",
              "core/button",
              "core/list",
              "core/columns",
            ]}
          />
        </section>
      </>
    );
  },
  save({ attributes }) {
    const { bgColor, textColor } = attributes;
    const blockProps = useBlockProps.save({
      style: { backgroundColor: bgColor, color: textColor },
    });

    return (
      <section
        {...blockProps}
        className="mx-auto w-[90%] py-16 text-center md:w-[70%]"
      >
        <InnerBlocks.Content />
      </section>
    );
  },
});

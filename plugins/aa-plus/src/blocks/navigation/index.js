import { registerBlockType } from "@wordpress/blocks";
import block from "./block.json";
import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

registerBlockType(block.name, {
  edit() {
    return (
      <div
        {...useBlockProps()}
        style={{
          padding: "10px",
          border: "1px dashed #ccc",
          textAlign: "center",
        }}
      >
        <p>{__("AA Navigation Block (Preview on Frontend)", "navigation")}</p>
      </div>
    );
  },

  save() {
    return null;
  },
});

import { defineArrayMember, defineType } from "sanity";
import { ImageIcon, ThLargeIcon } from "@sanity/icons";

/**
 * Portable Text content for the blog body — headings, lists, links,
 * inline images, quotes and code blocks.
 */
export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "table",
      title: "Table",
      icon: ThLargeIcon,
      fields: [
        {
          name: "hasHeaderRow",
          title: "First row is a header",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "caption",
          title: "Caption",
          type: "string",
        },
        {
          name: "rows",
          title: "Rows",
          type: "array",
          of: [
            {
              type: "object",
              name: "row",
              fields: [
                {
                  name: "cells",
                  title: "Cells",
                  type: "array",
                  of: [{ type: "string" }],
                },
              ],
              preview: {
                select: { cells: "cells" },
                prepare({ cells }) {
                  return {
                    title: Array.isArray(cells) ? cells.join(" · ") : "Row",
                  };
                },
              },
            },
          ],
        },
      ],
      preview: {
        select: { rows: "rows", caption: "caption" },
        prepare({ rows, caption }) {
          const count = Array.isArray(rows) ? rows.length : 0;
          return {
            title: caption || "Table",
            subtitle: `${count} row${count === 1 ? "" : "s"}`,
          };
        },
      },
    }),
  ],
});

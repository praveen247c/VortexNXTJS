import Image from "next/image";
import {
  PortableText as PortableTextBase,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "sanity";

import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="prose-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="prose-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="prose-h4">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="prose-quote">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="prose-p">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="prose-ul">{children}</ul>,
    number: ({ children }) => <ol className="prose-ol">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className="prose-code">{children}</code>,
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          className="prose-link"
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(1600).url();
      return (
        <figure className="prose-figure">
          <Image
            src={url}
            alt={value.alt || ""}
            width={1600}
            height={900}
            className="prose-img"
            sizes="(max-width: 760px) 100vw, 760px"
          />
          {value.caption ? (
            <figcaption className="prose-caption">{value.caption}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export default function PortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableTextBase value={value} components={components} />;
}

import { useEffect } from "react";

interface MetaTagsOptions {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
}

export function useMetaTags({
  title,
  description,
  ogImage,
  ogType = "website",
}: MetaTagsOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let tag = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("twitter:card", ogImage ? "summary_large_image" : "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    if (ogImage) {
      const abs = ogImage.startsWith("http")
        ? ogImage
        : `${window.location.origin}${ogImage}`;
      setMeta("og:image", abs, true);
      setMeta("twitter:image", abs);
    }
  }, [title, description, ogImage, ogType]);
}

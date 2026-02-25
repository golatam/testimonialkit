import { useEffect } from "react";
import { useProduct } from "@/config/ProductContext";

export function MetaTags() {
  const p = useProduct();

  useEffect(() => {
    document.title = p.metaTitle;

    const setMeta = (attr: string, value: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${value}"]`);
      if (el) {
        el.setAttribute("content", content);
      }
    };

    setMeta("name", "description", p.metaDescription);
    setMeta("property", "og:title", p.ogTitle);
    setMeta("property", "og:description", p.ogDescription);
  }, [p]);

  return null;
}

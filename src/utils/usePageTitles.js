import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageTitles } from "./pageTitles";

export function usePageTitle(defaultTitle = "ASK-SRAVA") {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Try exact match first
    let title = PageTitles[path];

    // Fallback for dynamic routes like /product/:id
    if (!title) {
      Object.keys(PageTitles).forEach((key) => {
        if (key.includes(":")) {
          const pattern = new RegExp(
            "^" + key.replace(/:[^\s/]+/g, "([\\w-]+)") + "$"
          );
          if (pattern.test(path)) {
            title = PageTitles[key];
          }
        }
      });
    }

    document.title = title || defaultTitle;
  }, [location.pathname, defaultTitle]);
}

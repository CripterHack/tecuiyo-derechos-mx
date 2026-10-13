import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_METADATA } from "@/data/generatedRouteMetadata.js";
import { getHeadMetadata, isManagedMetadata, normalizeRoutePath, NOT_FOUND_METADATA } from "@/utils/routeMetadata.js";

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = ROUTE_METADATA.find(entry => entry.path === normalizeRoutePath(pathname)) ?? NOT_FOUND_METADATA;
    const metadata = getHeadMetadata(route);
    document.title = metadata.title;

    document.head.querySelectorAll<HTMLMetaElement>("meta[name], meta[property]").forEach(node => {
      const attribute = node.hasAttribute("property") ? "property" : "name";
      if (isManagedMetadata(attribute, node.getAttribute(attribute) ?? "")) node.remove();
    });
    document.head.querySelectorAll('link[rel="canonical"]').forEach(node => node.remove());

    for (const attributes of metadata.meta) {
      const node = document.createElement("meta");
      for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
      node.dataset.tecuiyoMetadata = "true";
      document.head.append(node);
    }

    if (metadata.canonical) {
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = metadata.canonical;
      canonical.dataset.tecuiyoMetadata = "true";
      document.head.append(canonical);
    }
  }, [pathname]);

  return null;
};

export default RouteMetadata;

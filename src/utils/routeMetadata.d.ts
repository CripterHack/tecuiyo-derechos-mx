export interface RouteMetadataEntry {
  path: string | null;
  title: string;
  description: string;
}

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export interface HeadMetadata {
  title: string;
  canonical: string | null;
  meta: MetaTag[];
}

export const SITE_ORIGIN: string;
export const NOT_FOUND_METADATA: RouteMetadataEntry;
export function normalizeRoutePath(pathname: string): string;
export function getCanonicalUrl(routePath: string): string;
export function getHeadMetadata(route: RouteMetadataEntry): HeadMetadata;
export function isManagedMetadata(attribute: "name" | "property", value: string): boolean;

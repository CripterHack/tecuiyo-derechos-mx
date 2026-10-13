import type { RouteMetadataEntry } from "../src/utils/routeMetadata.js";

export function collectRouteMetadata(root?: string): Promise<RouteMetadataEntry[]>;
export function renderRouteHtml(template: string, route: RouteMetadataEntry): string;
export function generateStaticPages(outputDirectory: string, routes: RouteMetadataEntry[]): Promise<void>;

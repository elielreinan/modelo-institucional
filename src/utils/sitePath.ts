export function sitePath(path: string): string {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  const base = `${import.meta.env.BASE_URL.replace(/\/+$/, "")}/`;
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");
  const isAsset = /\.[^/]+$/.test(normalizedPath);

  return normalizedPath
    ? `${base}${normalizedPath}${isAsset ? "" : "/"}`
    : base;
}

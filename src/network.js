export function createHttpBaseUrl(host, port) {
  return `http://${formatHttpHost(host)}:${port}`;
}

export function formatHttpHost(host) {
  const value = String(host || "").trim();
  if (value === "0.0.0.0" || value === "::" || value === "") {
    return "localhost";
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    return value;
  }
  if (value.includes(":")) {
    return `[${value}]`;
  }
  return value || "localhost";
}

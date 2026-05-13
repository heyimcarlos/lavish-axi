export function createHttpBaseUrl(host, port) {
  return `http://${formatHttpHost(host)}:${port}`;
}

export function formatHttpHost(host) {
  const value = String(host || "").trim();
  if (value === "0.0.0.0" || value === "") {
    return "127.0.0.1";
  }
  if (value === "::") {
    return "[::1]";
  }
  const inner = value.startsWith("[") && value.endsWith("]") ? value.slice(1, -1) : value;
  if (inner.includes(":")) {
    return `[${encodeIpv6ZoneId(inner)}]`;
  }
  return value || "127.0.0.1";
}

export function formatHttpRequestHost(host) {
  const value = String(host || "").trim();
  if (value === "0.0.0.0" || value === "") {
    return "127.0.0.1";
  }
  if (value === "::") {
    return "::1";
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    return value.slice(1, -1).replace(/%25/g, "%");
  }
  return value.replace(/%25/g, "%");
}

function encodeIpv6ZoneId(value) {
  return value.replace(/%(?![0-9A-Fa-f]{2})/g, "%25");
}

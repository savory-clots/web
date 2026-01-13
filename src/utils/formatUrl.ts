/**
 * Ensures a URL has a protocol and removes trailing slashes.
 */
export function formatUrl(input: string): string {
  if (!input) {
    return '';
  }

  let url = input.trim();

  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  // Remove trailing slash
  url = url.replace(/\/+$/, '');

  return url;
}

const IP_LOOKUP_TIMEOUT_MS = 2500;

const IP_ENDPOINTS = [
  {
    url: 'https://api.ipify.org?format=json',
    parse: async (response: Response) => {
      const data = await response.json();
      return typeof data.ip === 'string' ? data.ip.trim() : null;
    },
  },
  {
    url: 'https://api64.ipify.org?format=json',
    parse: async (response: Response) => {
      const data = await response.json();
      return typeof data.ip === 'string' ? data.ip.trim() : null;
    },
  },
];

const fetchWithTimeout = async (url: string, timeoutMs: number) => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timeoutId);
  }
};

export const fetchPublicIp = async () => {
  for (const endpoint of IP_ENDPOINTS) {
    try {
      const response = await fetchWithTimeout(endpoint.url, IP_LOOKUP_TIMEOUT_MS);

      if (!response.ok) {
        continue;
      }

      const ipAddress = await endpoint.parse(response);

      if (ipAddress) {
        return ipAddress;
      }
    } catch {
      continue;
    }
  }

  return null;
};

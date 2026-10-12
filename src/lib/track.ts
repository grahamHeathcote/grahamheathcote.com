declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

// No-op if the Umami script hasn't loaded (e.g. blocked by an ad blocker).
export function track(event: string) {
  window.umami?.track(event);
}

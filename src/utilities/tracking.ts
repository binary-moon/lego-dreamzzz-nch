/* eslint-disable @typescript-eslint/no-explicit-any */
export const trackEvent = (
  name: string,
  properties?: { [key: string]: any }
) => {
  window.amzn("trackEvent", name, properties);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    amzn: any; // Use the correct type if you know it instead of `any`
    gtag: any; // Use the correct type if you know it instead of `any`
  }
}

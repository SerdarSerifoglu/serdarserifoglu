export const pageview = (measurementId: string, url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", measurementId, {
      page_path: url,
    });
  }
};

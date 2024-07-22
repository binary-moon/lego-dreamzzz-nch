import { useEffect, useState } from "react";

const usePreloadImages = (imageUrls: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const promises = imageUrls.map((url) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    Promise.all(promises)
      .then(() => setLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, [imageUrls]);

  return loaded;
};

export default usePreloadImages;

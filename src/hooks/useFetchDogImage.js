import { useState, useEffect } from "react";

function useFetchDogImage() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message);
        setIsLoading(false);
      });
  }, []);

  return { imageUrl, isLoading };
}

export default useFetchDogImage;

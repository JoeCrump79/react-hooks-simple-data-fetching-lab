import React from "react";
import useFetchDogImage from "../hooks/useFetchDogImage";

function App() {
  const { imageUrl, isLoading } = useFetchDogImage();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <img src={imageUrl} alt="A Random Dog" />;
}

export default App;

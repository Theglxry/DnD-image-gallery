import React, { useEffect, useState } from "react";
import PageLoader from "../../components/PageLoader";
import UserGallery from "../../components/newGallery/userGallery";

function ImageGallery() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <UserGallery />
        </>
      )}
    </div>
  );
}

export default ImageGallery;

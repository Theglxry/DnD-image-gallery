import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function galleryComp() {
  const [images, setImages] = useState([]);

  const accessKey = "euLYxIZkz1eKpqHB1VzIIxLpCevhtSUhBdcm-8g5PeY";
  console.log(images);
  const apiUrl = `https://api.unsplash.com/photos?client_id=${accessKey}`;

  // Fetch images from Unsplash
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images from Unsplash:", error);
      });
  }, []);

  // Rearrange images when a drag-and-drop operation occurs
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    console.log(onDragEnd);

    const reorderedImages = [...images];
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);

    setImages(reorderedImages);
  };

  return (
    <>
      {!images ? (
        <div className="... flex items-center justify-center">
          <h2 className="flex item-center justify-center h-creen  font-bold text-4xl text-center text-slate-800">
            Loading....
          </h2>
        </div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="image-gallery" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="px-5 container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
              >




                {images.map((image, index) => (
                  <Draggable
                    key={image.id}
                    draggableId={image.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Image
                          id={image.id}
                          src={image.urls.regular}
                          alt={image.alt_description || "Unsplash Image"}
                          {...image}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}






                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  );
}

export default galleryComp;

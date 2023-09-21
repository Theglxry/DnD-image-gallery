import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const mockImages = ({ images }) => {

    const handleDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
      
        // Update the order of images in your state or data structure
        const reorderedImages = Array.from(images);
        const [movedImage] = reorderedImages.splice(result.source.index, 1);
        reorderedImages.splice(result.destination.index, 0, movedImage);
      
        // Set the new order of images in your state
        setImages(reorderedImages);
      };
      

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="image-gallery" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ display: 'flex' }}
          >
            {images.map((image, index) => (
              <Draggable
                key={image.id} // Replace with a unique identifier for each image
                draggableId={image.id}
                index={index}
              >
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <img
                      src={image.url} // Replace with the image URL
                      alt={`Image ${index + 1}`}
                      style={{
                        width: '100px', // Adjust the image size as needed
                        height: '100px',
                      }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default mockImages;

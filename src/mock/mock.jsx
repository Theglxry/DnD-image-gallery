import React, { useState } from "react";
// import ImageGallery from './ImageGallery';
// import MocDetails from "./mocDetails";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


  const initialImages = [
    {
      id: "1",
      url: "https://www.act.gov.au/__data/assets/image/0008/2173598/2023-OCWeb-MulticulturalFestival-Hero.jpg",
    },
    {
      id: "2",
      url: "https://d2g6byanrj0o4m.cloudfront.net/images/41292/ndebele_women.jpg",
    },

    {
      id: "3",
      url: "https://api.army.mil/e2/c/images/2011/05/29/198515/original.jpg",
    },
    {
      id: "4",
      url: "https://d2g6byanrj0o4m.cloudfront.net/images/41292/ndebele_women.jpg",
    },

    // Add more images here...
  ];



  const mock = () => {

    const [images, updateImages] = useState(initialImages);

    function handleOnDragEnd(result) {
      if (!result.destination) return;
  
      const items = Array.from(images);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateImages(items);
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Drag and Drop Image Gallery</h1>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="image-gallery" direction="horizontal">
              {(provided) => (
                <ul className="image-gallery" {...provided.droppableProps} ref={provided.innerRef}>
                  {images.map(({ id, url }, index) => (

                    <Draggable key={id} draggableId={id} index={index}>
                    
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <img
                            src={url}
                            alt={`Image ${index + 1}`}
                            style={{
                              width: '100px', // Adjust the image size as needed
                              height: '100px',
                            }}
                          />
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </header>
        <p>
          Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
        </p>
      </div>
    );
};

export default mock;

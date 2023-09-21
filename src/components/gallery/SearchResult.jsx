// import React from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Image from "./Image";

// function SearchResults({ displaySearchResults, searchImages, onDragEnd }) {
//   return (
//     <div className="w-full pt-24">
//       {displaySearchResults ? (
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="search-results" direction="horizontal">
//             {(provided) => (
//               <div
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 className="px-5 container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
//               >
//                 {searchImages.map((image, index) => (
//                   <Draggable
//                     key={image.id}
//                     draggableId={image.id.toString()}
//                     index={index}
//                   >
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                       >
//                         <Image
//                           id={image.id}
//                           src={image.urls.regular}
//                           alt={image.alt_description || "Unsplash Image"}
//                           {...image}
//                         />
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       ) : null}
//     </div>
//   );
// }

// export default SearchResults;





import React from 'react'

function SearchResult() {
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult

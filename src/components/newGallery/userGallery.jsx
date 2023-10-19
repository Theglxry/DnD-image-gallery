import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { Grid } from "./Grid";
import { SortablePhoto } from "./SortablePhoto";
import { Photo } from "./Photo";
import GalleryData from "../../mock/data";
import Search from "./Search";

function UserGallery() {
  const [items, setItems] = useState(GalleryData);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const [filteredItems, setFilteredItems] = useState(items); //state to store filtered items
  const [noResults, setNoResults] = useState(false); // State to track no results

  const handleSearch = (query) => {
    const filtered = GalleryData.filter((item) =>
      item.brand.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      setNoResults(true);
    } else setNoResults(false);

    setFilteredItems(filtered);
  };

  // drag n drop setup
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }

  return (
    <main>
      <Search onSearch={handleSearch} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={filteredItems} strategy={rectSortingStrategy}>
          <Grid>
            {noResults ? (
              <h1 className="text-center line-through">
                No result found, try another keyword 🥰{" "}
              </h1>
            ) : (
              filteredItems.map((item, index) => (
                <SortablePhoto
                  key={item.url}
                  url={item.url}
                  brand={item.brand}
                  index={index}
                  className={filteredItems.indexOf(item) === -1 ? 'swap-animation' : 'swap-animation show'}
                />
              ))
            )}
          </Grid>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Photo url={activeId} index={filteredItems.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
}

export default UserGallery;

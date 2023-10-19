import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
// import GalleryData from '../../mock/data'
import {Photo} from './Photo'



export const SortablePhoto = (props) => {
    // const sortable = useSortable({id: props.url});
    const {
      attributes,
      listeners,
      isDragging,
      setNodeRef,
      transform,
      transition,
    } =  useSortable({id: props.url});
  
    // add bit of css when dragged
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };

  return (
    <Photo
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
      brand={props.brand}
    />
  )
}

// export default SortablePhoto
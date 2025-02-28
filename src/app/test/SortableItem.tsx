'use client'

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Definindo as props esperadas pelo componente
interface SortableItemProps {
  id: number;
}

export const SortableItem: React.FC<SortableItemProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '8px',
    margin: '4px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      Item {id}
    </div>
  );
};

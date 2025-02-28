'use client'
// src/components/Card.tsx
import { FC } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export type CardType = {
  id: string;
  title: string;
};

const Card: FC<CardType> = ({ id, title }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-4 bg-white shadow-md rounded-lg cursor-grab active:cursor-grabbing"
    >
      <p>{title}</p>
    </div>
  );
};

export default Card;
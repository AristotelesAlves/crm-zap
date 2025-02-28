'use client'
import { FC } from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import Card, { CardType } from "./Card";

export type ColumnType = {
  id: string;
  title: string;
  cards: CardType[];
};

const Column: FC<ColumnType> = ({ id, title, cards }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext id={id} items={cards} strategy={rectSortingStrategy}>
      <div
        ref={setNodeRef}
        className="w-64 p-4 h-full bg-gray-50 rounded-lg shadow-sm mr-4 flex flex-col"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4">{title}</h2>
        <div className="flex flex-col gap-2 h-full w-full bg-red-500">
          {cards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} />
          ))}
          {cards.length == 0 ? (
                <div 
                id={id}
                ref={setNodeRef} 
                className="w-full h-full bg-blue-500"></div>
          ) :  null}
        </div>
      </div>
    </SortableContext>
  );
};

export default Column;
'use client'
import { useState } from "react";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Column, { ColumnType } from "./Column";

export default function Home() {
  // Dados iniciais
  const initialColumns: ColumnType[] = [
    {
      id: '1',
      title: "To Do",
      cards: [
        { id: "card-1", title: "Task 1" },
        { id: "card-2", title: "Task 2" },
      ],
    },
    {
      id: '2',
      title: "In Progress",
      cards: [
        { id: "card-3", title: "Task 3" },
        { id: "card-4", title: "Task 4" },
      ],
    },
    {
      id: '3',
      title: "In Progress",
      cards: [
        { id: "card-3", title: "Task 5" },
      ],
    },
  ];

  const [columns, setColumns] = useState<ColumnType[]>(initialColumns);

  function findColumn (id: string | null){
    if(!id){
      return;
    }

    const column = columns.find(col => col.cards.some(card => card.id === id)) || null ;

    return column;
  }
    
  function moveCardInColumn(origin: string, destination: string, cardId: string) {
    setColumns((prevColumns: ColumnType[]) => {
      const originColumn = prevColumns.find(col => col.id === origin);
      const destinationColumn = prevColumns.find(col => col.id === destination);
  
      if (!originColumn || !destinationColumn){
        return prevColumns
      };

      const cardToMove = originColumn.cards.find(card => card.id === cardId);
      
      if (!cardToMove){
        return prevColumns
      };
  
      originColumn.cards = originColumn.cards.filter(card => card.id !== cardId);
  
      destinationColumn.cards.push(cardToMove);

      return [...prevColumns];
    });
  }

  const handleDragOver = ({ active, over, ...restando }: DragOverEvent) => {


    if (!over) return;
  
    const origem = findColumn(active? active.id.toString() : null);
    const final = findColumn(over? over.id.toString() : null);
    
    if(origem && final){
      moveCardInColumn(
        origem.id, 
        final.id, 
        active.id.toString()
      )
    }


  };


  const handleDragEnd = ({ active, over, ...restando }: DragEndEvent) => {


    if (!over) return;
    const origem = findColumn(active? active.id.toString() : null);
    const final = findColumn(over? over.id.toString() : null);

    if(origem && final){
      moveCardInColumn(
        origem.id, 
        final.id, 
        active.id.toString()
      )
      

    }


  };
  
  

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex p-4 h-full">
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            cards={column.cards}
          />
        ))}
      </div>
    </DndContext>
  );
}
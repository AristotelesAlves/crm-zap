'use client'
import { DndContext, useDroppable, useDraggable, DragEndEvent } from '@dnd-kit/core';

const Column = ({ id, children }: { id: string, children: React.ReactNode }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} style={{ padding: 20, border: '1px solid black', minHeight: '200px' }}>
      <h3>{id}</h3>
      {children}
    </div>
  );
};

const DraggableItem = ({ id }: { id: string }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ padding: 10, marginBottom: 10, backgroundColor: 'lightblue', cursor: 'pointer' }}
    >
      {id}
    </div>
  );
};

const App = () => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    // Identificar a coluna onde o item foi largado
    if (over) {
      console.log(`Item ${active.id} foi largado na coluna ${over.id}`);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex' }}>
        <Column id="coluna1">
          <DraggableItem id="item5 " />
          <DraggableItem id="item2" />
        </Column>
        <Column id="coluna2">
          <DraggableItem id="item3" />
          <DraggableItem id="item4" />
        </Column>
      </div>
    </DndContext>
  );
};

export default App;

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "react-edit-text/dist/index.css";
import { Card } from "./Card";

export const CardList = (props) => {
  return (
    <DragDropContext onDragEnd={props.cardDragged}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {props.cards.map((card, index) => (
              <Draggable
                key={card.cardKey}
                draggableId={String(card.cardKey)}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    class="p-2"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card
                      idx={index}
                      key={card.cardKey}
                      data={card}
                      cardClicked={props.cardClicked}
                      cardUpdated={props.cardUpdated}
                      cardDeleted={props.cardDeleted}
                    ></Card>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

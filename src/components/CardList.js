import "react-edit-text/dist/index.css";
import { Card } from "./Card";

export const CardList = (props) => {
  return (
    <div>
      {props.cards.map((card, idx) => (
        <Card
          idx={idx}
          key={card.cardKey}
          data={card}
          cardClicked={props.cardClicked}
          cardUpdated={props.cardUpdated}
          cardDeleted={props.cardDeleted}
        ></Card>
      ))}
    </div>
  );
};

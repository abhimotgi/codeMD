import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

const Card = (props) => {
  return (
    <div class="p-2 bg-gray-100 m-2 hover:shadow-md">
      <div
        onMouseEnter={() =>
          props.cardClicked(props.data.startIdx, props.data.endIdx)
        }
      >
        <div class="flex flex-row items-center">
          <EditText
            name="h1"
            style={{
              fontSize: "20pt",
              margin: "2px",
              padding: "0px",
              fontWeight: "bold",
            }}
            placeholder={props.data.heading}
            onSave={(e) => props.cardUpdated("h1", props.idx, e.value)}
          />
          <div
            class="cursor-pointer"
            onClick={() => props.cardDeleted(props.idx)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 m-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <EditTextarea
          name="content"
          placeholder={props.data.content}
          onSave={(e) => props.cardUpdated("content", props.idx, e.value)}
        />
        <blockquote class="font-mono text-xs whitespace-pre-wrap bg-gray-200">
          {props.data.codeBlock}
        </blockquote>
      </div>
    </div>
  );
};

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

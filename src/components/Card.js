import { useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";

const CollapseButton = (props) => {
  return (
    <div class="cursor-pointer" onClick={() => props.collapse(!props.cardOpen)}>
      {
        /* Collapsed state: show down arrow*/
        !props.cardOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        )
      }

      {
        /* Expanded state: show up arrow */
        props.cardOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        )
      }
    </div>
  );
};

const DeleteButton = (props) => {
  return (
    <div class="cursor-pointer" onClick={() => props.cardDeleted(props.idx)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export const Card = (props) => {
  const [cardOpen, setCardOpen] = useState(true);
  const [content, setContent] = useState(props.data.content);
  const [header, setHeader] = useState(props.data.header);

  return (
    <div class="p-2 bg-gray-100 m-2 hover:shadow-md transition-all">
      <div
        onMouseEnter={() =>
          props.cardClicked(props.data.startIdx, props.data.endIdx)
        }
      >
        <div
          class="flex justify-end cursor-pointer"
          onClick={() => setCardOpen(!cardOpen)}
        >
          <CollapseButton
            collapse={(cardState) => setCardOpen(cardState)}
            cardOpen={cardOpen}
          ></CollapseButton>
          <DeleteButton
            cardDeleted={props.cardDeleted}
            idx={props.idx}
          ></DeleteButton>
        </div>
        <EditText
          name="h1"
          style={{
            fontSize: "16pt",
            margin: "2px",
            padding: "0px",
            fontWeight: "bold",
          }}
          placeholder="# Header"
          value={header}
          onChange={(e) => setHeader(e.value)}
          onSave={(e) => props.cardUpdated("h1", props.idx, e.value)}
        />

        {cardOpen && (
          <div class="transition-all">
            <EditTextarea
              name="content"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.value)}
              onSave={(e) => props.cardUpdated("content", props.idx, e.value)}
            />
            <blockquote class="font-mono text-xs whitespace-pre-wrap bg-gray-200">
              {props.data.codeBlock}
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

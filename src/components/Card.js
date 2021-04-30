import { useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";

const CardMenuButton = (props) => {
  return (
    <div class="cursor-pointer" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

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
    <div
      class="cursor-pointer"
      onClick={() => props.cardDeleted(props.idx)}
    ></div>
  );
};

const ViewCodeButton = (props) => {
  return (
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
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
};

export const Card = (props) => {
  const [cardOpen, setCardOpen] = useState(true);
  const [content, setContent] = useState(props.data.content);
  const [header, setHeader] = useState(props.data.header);

  return (
    <div
      class="p-2 bg-gray-100 m-2 hover:shadow-md transition-all"
      // onMouseEnter={() =>
      //   props.cardClicked(props.data.startIdx, props.data.endIdx)
      // }
    >
      <div>
        <div class="flex justify-between">
          <CardMenuButton
            onClick={() =>
              props.cardClicked(props.data.startIdx, props.data.endIdx)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          </CardMenuButton>
          <div
            class="flex flex-grow justify-center cursor-pointer"
            onClick={() => setCardOpen(!cardOpen)}
          >
            <CollapseButton
              collapse={(cardState) => setCardOpen(cardState)}
              cardOpen={cardOpen}
            ></CollapseButton>
          </div>

          <CardMenuButton onClick={() => props.cardDeleted(props.idx)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </CardMenuButton>
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

        <div class={!cardOpen && "hidden"}>
          <EditTextarea
            name="content"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.value)}
            onSave={(e) => props.cardUpdated("content", props.idx, e.value)}
          />
          <blockquote
            class="font-mono text-xs whitespace-pre-wrap bg-gray-200 hover:bg-gray-300 cursor-pointer"
            onClick={() =>
              props.cardClicked(props.data.startIdx, props.data.endIdx)
            }
          >
            {props.data.codeBlock}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

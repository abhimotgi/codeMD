import { useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";

export const Card = (props) => {
  const [cardOpen, setCardOpen] = useState(true);
  const [content, setContent] = useState("");

  return (
    <div class="p-2 bg-gray-100 m-2 hover:shadow-md transition-all duration-1000">
      <div
        onMouseEnter={() =>
          props.cardClicked(props.data.startIdx, props.data.endIdx)
        }
      >
        <div class="flex flex-row items-center">
          <EditText
            name="h1"
            style={{
              fontSize: "16pt",
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
        {cardOpen && (
          <div class="transition-all">
            <EditTextarea
              name="content"
              placeholder={props.data.content}
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

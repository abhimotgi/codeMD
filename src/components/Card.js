import { useState } from "react";
import { EditText, EditTextarea } from "react-edit-text";
import { CardMenuButton } from "./CardMenuButton";
import { CollapseButton } from "./CollapseButton";

export const Card = (props) => {
  const [cardOpen, setCardOpen] = useState(true);
  const [content, setcontent] = useState("");
  const [header, setheader] = useState("");

  return (
    <div class="p-3 bg-white hover:shadow-md transition-all rounded-sm">
      <div>
        <div class="flex justify-between">
          {/* Eye (scroll to code) */}
          <CardMenuButton
            onClick={() =>
              props.cardClicked(props.data.startIdx, props.data.endIdx)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </CardMenuButton>
          {/* Expand / collapse card */}
          <div
            class="flex flex-grow justify-center cursor-pointer"
            onClick={() => setCardOpen(!cardOpen)}
          >
            <CollapseButton
              collapse={(cardState) => setCardOpen(cardState)}
              cardOpen={cardOpen}
            ></CollapseButton>
          </div>
          {/* Delete card */}
          <CardMenuButton onClick={() => props.cardDeleted(props.idx)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
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
          onChange={setheader}
          // onChange={(e) => props.cardUpdated("h1", props.idx, e.value)}
          onSave={(e) => props.cardUpdated("h1", props.idx, e.value)}
        />

        <div class={!cardOpen && "hidden"}>
          <EditTextarea
            name="content"
            placeholder="Content"
            value={content}
            onChange={setcontent}
            onSave={(e) => props.cardUpdated("content", props.idx, e.value)}
            style={{
              fontSize: "11pt",
            }}
          />
          <blockquote
            class="font-mono text-xs overflow-auto whitespace-pre-wrap bg-gray-100 hover:bg-red-200 active:bg-red-300 cursor-pointer"
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

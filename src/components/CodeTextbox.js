import { useEffect, useRef } from "react";
export const CodeTextbox = (props) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef !== null) {
      //   textAreaRef.current.focus();
      textAreaRef.current.selectionStart = props.startIdx;
      //   textAreaRef.current.blur();
      textAreaRef.current.selectionEnd = props.endIdx;
      textAreaRef.current.focus();
    }
  });

  return (
    <div>
      <textarea
        class="font-mono text-sm w-full bg-gray-100 h-96 m-2 p-2  focus:outline-none"
        ref={textAreaRef}
        // onMouseUp={(event) => props.updateVars(event)}
        // onChange={(event) => props.updateVars(event)}
        onSelect={(event) => props.updateVars(event)}
      ></textarea>
    </div>
  );
};

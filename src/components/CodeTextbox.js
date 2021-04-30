import { useEffect, useRef } from "react";
export const CodeTextbox = (props) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef !== null) {
      // scroll to selection
      textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd =
        props.startIdx;
      textAreaRef.current.blur();
      textAreaRef.current.focus();
      textAreaRef.current.selectionEnd = props.endIdx;
    }
  }, [props.startIdx, props.endIdx, props.clickSwitch]);

  return (
    <div>
      <textarea
        class="font-mono text-sm w-full bg-gray-100 m-2 p-2  focus:outline-none"
        ref={textAreaRef}
        rows="30"
        placeholder="Paste your code..."
        // onMouseUp={(event) => props.updateVars(event)}
        onChange={(event) => props.updateVars(event)}
        onSelect={(event) => props.updateVars(event)}
      ></textarea>
    </div>
  );
};

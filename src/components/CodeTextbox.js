import { useEffect, useRef } from "react"
export const CodeTextbox = (props) => {
    const textAreaRef = useRef(null)

    useEffect(() => {
        if (textAreaRef !== null) {
            textAreaRef.current.focus()
            textAreaRef.current.selectionStart = props.startIdx
            textAreaRef.current.selectionEnd = props.endIdx
        }
    })

    return (
        <div>
            <textarea ref={textAreaRef}  onMouseUp={(event) => props.updateVars(event)} onChange={(event) => props.updateVars(event)}></textarea>
        </div>
    )
}

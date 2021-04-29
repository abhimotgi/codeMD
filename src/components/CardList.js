import { EditText } from "react-edit-text"
import 'react-edit-text/dist/index.css';


const Card = (props) => {
    return (
        <div onMouseEnter={() => props.cardClicked(props.data.startIdx, props.data.endIdx)}>
            <EditText
            name="h1"
            defaultValue={props.data.heading}
            onSave={(e) => props.cardUpdated("h1", props.idx, e.value)}
            />
            <EditText
            name="content"
            defaultValue={props.data.content}
            onSave={(e) => props.cardUpdated("content", props.idx, e.value)}
            />
            <blockquote>{props.data.codeBlock}</blockquote>
        </div>
    ) 
    // {name, value, previousValue}
}

export const CardList = (props) => {
    return (
        <div>
            {props.cards.map((card, idx) => (
                <Card idx={idx} key={idx} data={card} cardClicked={props.cardClicked} cardUpdated={props.cardUpdated}></Card>
            ))}
        </div>
        // <Card data={props.cards[0]}></Card>
    )
}
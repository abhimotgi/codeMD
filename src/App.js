import React from "react";
import "./App.css";
import { CodeTextbox } from "./components/CodeTextbox";
import { CardList } from "./components/CardList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cardCount = 0;
    this.state = {
      startIdx: 0,
      endIdx: 0,
      code: null,
      cards: [],
    };
  }

  updateTextboxVars = (event) => {
    const { selectionStart, selectionEnd, value } = event.target;
    this.setState({
      code: value,
      startIdx: selectionStart,
      endIdx: selectionEnd,
    });
  };

  addCard = () => {
    if (this.state.endIdx > this.state.startIdx) {
      let card = {
        startIdx: this.state.startIdx,
        endIdx: this.state.endIdx,
        codeBlock: this.state.code.substring(
          this.state.startIdx,
          this.state.endIdx
        ),
        header: "",
        content: "",
        cardKey: this.cardCount,
      };
      this.setState({ cards: [...this.state.cards, card] });
      this.cardCount += 1;
    } else {
      console.log("invalid selection");
    }
  };

  setSelection = (startIdx, endIdx) => {
    this.setState({
      startIdx,
      endIdx,
    });
  };

  updateCard = (element, idx, value) => {
    let cards = this.state.cards.slice();
    switch (element) {
      case "h1":
        cards[idx].header = value;
        break;
      case "content":
        cards[idx].content = value;
        break;
      default:
        break;
    }
    this.setState({ cards });
  };

  deleteCard = (idx) => {
    const cards = [...this.state.cards];
    cards.splice(idx, 1);

    this.setState({ cards });
  };

  render() {
    return (
      <div class="container mx-auto flex flex-row">
        <div class="flex-col flex-grow w-3/4 m-2 h-3/4">
          <div class="container mx-auto">
            <CodeTextbox
              startIdx={this.state.startIdx}
              endIdx={this.state.endIdx}
              updateVars={(event) => this.updateTextboxVars(event)}
            ></CodeTextbox>
          </div>
          <div class="flex flex-row">
            <button
              class="bg-green-500 text-white p-2 m-2 rounded-md"
              onClick={this.addCard}
            >
              Add comment
            </button>
            <button
              class="bg-gray-800 text-white p-2 m-2 rounded-md"
              onClick={() => this.setState({ cards: [] })}
            >
              Clear cards
            </button>
          </div>
        </div>
        <div class="w-1/4 flex-shrink m-2">
          <CardList
            cards={this.state.cards}
            cardClicked={(startIdx, endIdx) =>
              this.setSelection(startIdx, endIdx)
            }
            cardUpdated={(element, idx, value) =>
              this.updateCard(element, idx, value)
            }
            cardDeleted={(idx) => this.deleteCard(idx)}
          ></CardList>
        </div>
      </div>
    );
  }
}

export default App;

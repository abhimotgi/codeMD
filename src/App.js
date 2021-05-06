import React from "react";
import "./App.css";
import { CodeTextbox } from "./components/CodeTextbox";
import { CardList } from "./components/CardList";
import { Button } from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cardCount = 0;
    this.state = {
      startIdx: 0,
      endIdx: 0,
      code: null,
      cards: [],
      clickSwitch: false,
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
      clickSwitch: !this.state.clickSwitch,
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

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  cardDragged = (result) => {
    // dropped outside list
    if (!result.destination) {
      return;
    }

    const cards = this.reorder(
      this.state.cards,
      result.source.index,
      result.destination.index
    );
    this.setState({ cards });
  };

  generateMarkdown = () => {
    let myString = "";
    myString += this.state.cards
      .map((card) => {
        return `# ${card.header}\n${card.content}\n\`\`\`\n${card.codeBlock}\n\`\`\`\n`;
      })
      .join("");
    console.log(myString);
  };

  render() {
    return (
      <div class="bg-gray-100">
        <div class="container mx-auto flex flex-row h-screen ">
          <div class="flex-col flex-grow w-3/4 m-2 h-3/4">
            <div class="container mx-auto">
              <CodeTextbox
                startIdx={this.state.startIdx}
                endIdx={this.state.endIdx}
                updateVars={(event) => this.updateTextboxVars(event)}
                clickSwitch={this.state.clickSwitch}
              ></CodeTextbox>
            </div>
            <div class="flex flex-row">
              <Button color="gray" onClick={this.addCard} icon="add">
                Add comment
              </Button>
              <Button
                color="gray"
                icon="clear"
                onClick={() => this.setState({ cards: [] })}
              >
                Clear cards
              </Button>
              <Button color="gray" icon="code" onClick={this.generateMarkdown}>
                Generate markdown
              </Button>
            </div>
          </div>
          <div class="w-1/4 flex-shrink m-2 h-3/4">
            <CardList
              cards={this.state.cards}
              cardClicked={this.setSelection}
              cardUpdated={this.updateCard}
              cardDeleted={this.deleteCard}
              cardDragged={this.cardDragged}
            ></CardList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

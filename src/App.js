import React from 'react';
import './App.css';
import {CodeTextbox} from './components/CodeTextbox'
import {CardList} from './components/CardList'

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      startIdx: 0,
      endIdx: 0,
      code: null,
      cards: []
    }
  }

  updateTextboxVars = (event) => {
    const { selectionStart, selectionEnd, value } = event.target;
    this.setState({
      // code: value.substring(selectionStart, selectionEnd),
      code: value,
      startIdx: selectionStart,
      endIdx: selectionEnd
    })
  }

  addCard = () => {
    if (this.state.endIdx > this.state.startIdx) {
      let card = {
        startIdx: this.state.startIdx,
        endIdx: this.state.endIdx,
        codeBlock: this.state.code.substring(this.state.startIdx, this.state.endIdx),
        heading: "test",
        content: "content"
      }
      this.setState({cards: [...this.state.cards, card]})
    }
    else {
      console.log('invalid selection')
    }
  }

  setSelection = (startIdx, endIdx) => {
    this.setState({
      startIdx,
      endIdx
    })
  }

  updateCard = (element, idx, value) => {
    let cards = this.state.cards.slice()
    switch(element) {
      case "h1":
        cards[idx].heading = value
        break;
      case "content":
        cards[idx].content = value
        break;
      default:
        break;
    }
    this.setState({cards})
  }

  render() {
    return (
      <div>
        <CodeTextbox startIdx={this.state.startIdx} endIdx={this.state.endIdx} updateVars={(event) => this.updateTextboxVars(event)}></CodeTextbox>
        <button onClick={this.addCard}>Add comment</button>
        <CardList cards={this.state.cards} cardClicked={(startIdx, endIdx) => this.setSelection(startIdx, endIdx)} cardUpdated={(element, idx, value) => this.updateCard(element, idx, value)}></CardList>
      </div>
    );
  }

}
  

export default App;

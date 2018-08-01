import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: Math.floor( Math.random() * 6 ),
      mostVotes : 0,
      mostCount : 0,
      votes: [0,0,0,0,0,0]
    }
  }


  asetaArvo = (kentta) => {
    const r = Math.floor( Math.random() * 6 );
    return () => {
      this.setState({ selected: r })
    }
  }

  vote = (selected) => {
    const kopio = Object.values(this.state.votes);
    kopio[selected] += 1;  
    let mostCount = 0;
    let mostVotes = 0;
    console.log(kopio)
    for (let i = 0; i < kopio.length; i++) {
      if ( kopio[i] >= mostCount ) {
        mostCount = kopio[i];
        mostVotes = i;  
      }
    }
    return () => {
      this.setState({ mostCount: mostCount })
      this.setState({ mostVotes: mostVotes })
      this.setState({ votes: kopio })
    }
  }

  render() {
    const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    return (
      <div>
        {this.props.anecdotes[this.state.selected]}<br />
        has {this.state.votes[this.state.selected]} votes<br />
        <Button
          handleClick={this.vote(this.state.selected)}
          text="Vote"
        />
        <Button
          handleClick={this.asetaArvo()}
          text="Next anecdote"
        />
        <h1>anecdote with most votes</h1>
        {this.props.anecdotes[this.state.mostVotes]}<br />
        has {this.state.mostCount} votes<br />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

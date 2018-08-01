import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali : 0,
      huono :0 
    }
  }
  
  render() {
    const painallus = (arvo) => () => { 
      switch(arvo) {
        case "hyva":
          this.setState({ hyva: this.state.hyva + 1 })
        break;
        case "neutraali":
          this.setState({ neutraali: this.state.neutraali + 1 })
        break;
        case "huono":
          this.setState({ huono: this.state.huono + 1 })
        break;
        default:
      }
    }
  
    return (
      <div>
        <h1>Anna palautetta</h1>
        <button onClick={painallus("hyva")}>Hyvä</button>
        <button onClick={painallus("neutraali")}>Neutraali</button>
        <button onClick={painallus("huono")}>Huono</button>
        <h1>Statistiikka</h1>
        Hyvä {this.state.hyva}<br />
        Neutraali {this.state.neutraali}<br />
        Huono {this.state.huono}<br />
      </div>
    )
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
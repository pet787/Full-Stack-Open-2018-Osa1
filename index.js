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
  
  sum = (args) => {
    let t = 0;
    for (var i of args ) {
      t += i;
    }
    return t;
  }

  zero = (...args) => {
    let r = true;
    for (var i of args ) {
      r = r && ( i === 0);
    }
    return r;
  }

  avr = (...args) => {
    return ( args[0] - args[2] ) / args.length;
  }

  pos = (...args) => {
    return 100 * args[0] / this.sum(args);
  }

  asetaArvo = (kentta,arvo) => {
    return () => {
      this.setState({ [kentta]: arvo })
    }
  }

  render() {
    const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    const Statistic = ({text1, text2}) => {
      return(
        <tr><td>{text1}</td><td>{text2}</td></tr>
      )
    } 

    const Statistics  = () => {
        if ( this.zero(this.state.hyva,this.state.neutraali,this.state.huono) ) {
          return (         
            <div>
              <h1>Statistiikka</h1>
              <h2>Ei yhtään palautetta annettu</h2>
            </div>
            )
        }
        else {
        return(
          <div>
            <h1>Statistiikka</h1>
            <table><tbody>
            <Statistic 
              text1={ "Hyvä" }
              text2={ this.state.hyva}/>
            <Statistic 
              text1={ "Neutraali"}
              text2={ this.state.neutraali}/>
            <Statistic 
              text1={ "Huono"}
              text2={ this.state.huono}/>
            <Statistic 
              text1={ "Keskiarvo"}
              text2={ this.avr(this.state.hyva, this.state.neutraali, this.state.huono).toFixed(1)}/>
            <Statistic 
              text1={ "Positiivisia"}
              text2={ this.pos( this.state.hyva, this.state.neutraali, this.state.huono).toFixed(1) + " %"}/>
            </tbody></table>
          </div>
        )
      }
    }
  
    return (
      <div>
        <h1>Anna palautetta</h1>
        <Button
          handleClick={this.asetaArvo("hyva",this.state.hyva+1)}
          text="Hyvä"
        />
        <Button
          handleClick={this.asetaArvo("neutraali",this.state.neutraali+1)}
          text="Neutraali"
        />
        <Button
          handleClick={this.asetaArvo("huono",this.state.huono+1)}
          text="Huono"
        />
        <Statistics />
      </div>
    )
  }
} 

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
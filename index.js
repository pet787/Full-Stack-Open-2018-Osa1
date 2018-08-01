import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return ( 
    <div>
      <h1>{props.k}</h1>
    </div> 
  )
}

const Osa = (probs) => {
  const osa = probs.osa
  return ( 
    <div>
      <p>{osa.nimi} {osa.tehtavia}</p>
    </div> 
  )
}

const Sisalto = (probs) => {
  const osat = probs.osat
  return ( 
    <div>
      <Osa osa={osat[0]} />
      <Osa osa={osat[1]} />
      <Osa osa={osat[2]} />
    </div> 
  )
}

const Yhteensa = (probs) => {
  const osat = probs.osat
  let y = 0
  osat.forEach( (i) => { y = y + i.tehtavia })
  return ( 
    <div>
      <p>Yhteensä {y} tehtävää</p>
    </div> 
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko k={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
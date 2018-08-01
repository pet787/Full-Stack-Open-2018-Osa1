import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return ( 
    <div>
      <h1>{props.k}</h1>
    </div> 
  )
}

const Osa = (props) => {
  return ( 
    <div>
      <p>{props.o} {props.t}</p>
    </div> 
  )
}

const Sisalto = (props) => {
  return ( 
    <div>
      <Osa o={props.o1} t={props.t1} />
      <Osa o={props.o2} t={props.t2} />
      <Osa o={props.o3} t={props.t3} />
    </div> 
  )
}

const Yhteensa = (props) => {
  return ( 
    <div>
      <p>Yhteensä {props.t} tehtävää</p>
    </div> 
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
  return (
    <div>
      <Otsikko k={kurssi} />
      <Sisalto o1={osa1.nimi} t1={osa1.tehtavia} o2={osa2.nimi} t2={osa2.tehtavia} o3={osa3.nimi} t3={osa3.tehtavia} />
      <Yhteensa t={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
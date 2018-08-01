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
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
  return (
    <div>
      <Otsikko k={kurssi} />
      <Sisalto o1={osa1} t1={tehtavia1} o2={osa2} t2={tehtavia2} o3={osa3} t3={tehtavia3} />
      <Yhteensa t={tehtavia1 + tehtavia2 + tehtavia3} />
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
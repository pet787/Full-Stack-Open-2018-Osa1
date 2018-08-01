import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return ( 
    <div>
      <h1>{props.k}</h1>
    </div> 
  )
}

const Sisalto = (props) => {
  return ( 
    <div>
      <p>{props.o1} {props.t1}</p>
      <p>{props.o2} {props.t2}</p>
      <p>{props.o3} {props.t3}</p>
    </div> 
  )
}

const Yhteensa = (props) => {
  return ( 
    <div>
      <p>yhteensä {props.t} tehtävää</p>
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
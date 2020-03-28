import React from 'react'

/* name={states.state}
        active={states.active}
        confirmed={states.confirmed}
        deaths={states.deaths}
        recovered={states.recovered}
        lastupdate={states.lastupdatedtime}*/

const Stateindia = ({name,active,confirmed,deaths,recovered,lastupdate}) => {
    return (
        <div className="container">
        <div className="row">
  <div className="col">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
    <p className="card-text text-info font-weight-bold">Confimed Cases : {confirmed}</p>
    <p className="card-text text-primary font-weight-bold">Active Cases : {active}</p>
    <p className="card-text text-danger font-weight-bold">Deaths : {deaths}</p>
    <p className="card-text text-success font-weight-bold">Recovered : {recovered}</p>
    <p className="card-footer text-muted">Last Update : {lastupdate}</p>
      </div>
    </div>
  </div>
  </div>
  </div>
    )
}

export default Stateindia

import React from 'react'
import Spinner from './Spinner'
import NumberFormat from 'react-number-format'
function Indiacount({indiacount,loading}) {

  if(loading) return (
    <Spinner />
  )
  return (
        <div className="card text-center">
  <div className="card-header">
    <h5>INDIA COVID-19 TRACKER</h5>
  </div>
  <div className="row">
      <div className="col">
  <div className="card-body">
    <h4 className="card-title text-primary">Total Cases</h4>        
    <p className="card-text font-weight-bold"><NumberFormat value={indiacount.cases} displayType={'text'} thousandSeparator={true} /></p>
    </div>
    </div>
    <div className="col">
    <div className="card-body">
    <h4 className="card-title text-info">New Cases</h4>        
    <p className="card-text font-weight-bold">{indiacount.todayCases}</p>
    </div>
    </div>
    <div className="col">
    <div className="card-body">
    <h4 className="card-title text-danger">Deaths</h4>        
    <p className="card-text font-weight-bold">{indiacount.deaths}</p>
    </div>
    </div>
    <div className="col">
    <div className="card-body">
    <h4 className="card-title text-success">Recovered</h4>        
    <p className="card-text font-weight-bold">{indiacount.recovered}</p>
    </div>
    </div>
    <div className="col">
    <div className="card-body">
    <h4 className="card-title text-muted">Active Cases</h4>        
    <p className="card-text font-weight-bold">{indiacount.active}</p>
    </div>
    </div>
    <div className="col">
    <div className="card-body">
    <h4 className="card-title text-warning">Critical Cases</h4>        
    <p className="card-text font-weight-bold">{indiacount.critical || 0}</p>
    </div>
  </div>
  </div>
  <div className="card-footer text-muted">
    *Data collected from worldometer source (May be different from goverment declared numbers)
  </div>
</div>

    )
}

export default Indiacount

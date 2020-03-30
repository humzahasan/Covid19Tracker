import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Spinner from './Spinner'
import NumberFormat from 'react-number-format'
const Stateindia = ({name,active,confirmed,deaths,recovered,lastupdate,loading}) => {
    
  if(loading) return (
    <Spinner />
  )

  return (
      <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
      <i className="fas fa-arrow-down"></i> {name} : {confirmed}   
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
              <p className="card-text text-info font-weight-bold">Confimed Cases : <NumberFormat value={confirmed} displayType={'text'} thousandSeparator={true} /></p>
              <p className="card-text text-primary font-weight-bold">Active Cases : {active}</p>
              <p className="card-text text-danger font-weight-bold">Deaths : {deaths}</p>
              <p className="card-text text-success font-weight-bold">Recovered : {recovered}</p>
              <p className="card-footer text-muted">Last Update : {lastupdate}</p>
              <p>#District wise data to be included soon</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )
}



export default Stateindia


/* <div className="row">
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
      </div> */
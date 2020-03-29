import React , {useState , useEffect, Fragment} from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Navbar from './Navbar'
import Totalcount from './Totalcount'
import Indiacount from './Indiacount'
import Stateindia from './Stateindia'
import Countrycount from './Countrycount'
import Footer from './Footer'
/*
API USED :
https://corona.lmao.ninja/v2/jhucsse Country wise data
//https://corona.lmao.ninja/all   All Total
https://api.covid19india.org/data.json statewise 
https://coronavirus-19-api.herokuapp.com/countries/india Single Country
*/

const App = () => {

  const [totalcount , setTotalcount] = useState({})
  const [countrycount, setCountrycount] = useState([])
  const [indiacount , setIndiacount] = useState([{}])
  const [statecount , setStatecount] = useState([])
  useEffect(() => {
    getTotalcount();
    getIndiacount();
    getStatecount();
    countryCount();

    }, [])

  const getTotalcount = async () => {
    //console.log("Global Data")
    const res = await axios('https://corona.lmao.ninja/all')
    const data = res.data
    //console.log(data)
    setTotalcount(data)
  }  

  const getIndiacount = async () => {
    //console.log("India Data")
    const res = await axios('https://coronavirus-19-api.herokuapp.com/countries/india')
    const data = res.data
    //console.log(res)
    setIndiacount(data)
  }

  const getStatecount = async () => {
    //console.log("State wise data")
    const res = await axios('https://api.covid19india.org/data.json')
    const data = res.data.statewise.slice(1)
    //console.log(data)
    setStatecount(data)
  }

  const countryCount = async () => {
    //console.log("Country Wise")
    const res = await axios('https://coronavirus-19-api.herokuapp.com/countries')
    const data = res.data
    //console.log(data)
    setCountrycount(data)
  }

  return (
    <Router>
    <div className="App">
      <Navbar />
      <br />
      <Switch>
        <Route exact path='/' render={props => (
          <Fragment>
            <Totalcount totalcount={totalcount}/>
      <Indiacount indiacount={indiacount} />
      
      <Fragment>
      <h4>Indian State-wise Tracker </h4>
      <div className="container bg-info text-white">
            <p>*Data in sync with details from Indian state press releases, official government links and reputable news channels as source. Also verified by group of volunteers.</p>        
      </div>
      { statecount.map(states => (
      <Stateindia 
        key={states.state}
        name={states.state}
        active={states.active}
        confirmed={states.confirmed}
        deaths={states.deaths}
        recovered={states.recovered}
        lastupdate={states.lastupdatedtime}
      />
      ))
       }
       </Fragment>
      
          </Fragment>
        )} />
        <Route exact path="/country" render={ props => (
          <Fragment>
            <Fragment className="container">
        <h5> Global Data </h5>
      {countrycount.map(country => (
        <Countrycount 
          key={country.country}
          count='true'
          country={country.country} 
          cases={country.cases} 
          todayCases={country.todayCases} 
          deaths={country.deaths} 
          todayDeaths={country.todayDeaths}
          recovered={country.recovered}
          active={country.active}
          critical={country.critical} 
        />
      ))
      } 
      </Fragment>
          </Fragment>
        )} />
      </Switch>
       
      
      <Footer />
      </div>
      </Router>
  );
}

export default App;

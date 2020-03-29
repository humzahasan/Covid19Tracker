import React from 'react'
import Spinner from './Spinner'
import NumberFormat from 'react-number-format';
const Totalcount = ({totalcount,loading}) => {
    
    if(loading) return (
        <Spinner />
    ) 

    return (
        <div className="container-fluid">
            
        <div className="row mx-auto">
            <div className="col mx-auto">
            <div className="card border-primary mx-auto" style={{width:"15rem", height:"6rem"}}>
                <div className="card-body">
                    <h4 className="card-title text-primary">Total Cases</h4>        
                    <p className="card-text font-weight-bold"><NumberFormat value={totalcount.cases} displayType={'text'} thousandSeparator={true} /></p>    
                </div>
            </div>
            </div>
            <div className="col mx-auto">
            <div className="card border-danger mx-auto" style={{width:"15rem", height:"6rem"}}>
                <div className="card-body">
                    <h4 className="card-title text-danger">Total Deaths</h4>        
                    <p className="card-text font-weight-bold"><NumberFormat value={totalcount.deaths} displayType={'text'} thousandSeparator={true} /></p>    
                </div>
            </div>
            </div>
            <div className="col mx-auto">
            <div className="card border-success mx-auto" style={{width:"15rem", height:"6rem"}}>
            
                <div className="card-body">
                    <h4 className="card-title text-success ">Total Recovered</h4>        
                    <p className="card-text font-weight-bold"><NumberFormat value={totalcount.recovered} displayType={'text'} thousandSeparator={true} /></p>    
                </div>
            </div>
            </div>
            <div className="col mx-auto">
            <div className="card border-warning mx-auto" style={{width:"15rem" , height:"6rem"}}>
                
                <div className="card-body">
                    <h4 className="card-title text-warning">Total Active</h4>        
                    <p className="card-text font-weight-bold"><NumberFormat value={totalcount.active} displayType={'text'} thousandSeparator={true} /></p>    
                </div>
            </div>
            </div>
        </div>
        <div className="container-fluid bg-info text-white">
            <p>*Latest update in sync with Worldometer</p>        
        </div>
            
        </div>
    )
}

export default Totalcount

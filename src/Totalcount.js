import React from 'react'

const Totalcount = ({totalcount}) => {
    return (
        <div className="container">
            
        <div className="row">
            <div className="col">
            <div className="card border-primary " style={{width:"15rem", height:"6rem"}}>
                <div className="card-body">
                    <h4 className="card-title text-primary">Total Cases</h4>        
                    <p className="card-text font-weight-bold">{totalcount.cases}+</p>    
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card border-danger" style={{width:"15rem", height:"6rem"}}>
                <div className="card-body">
                    <h4 className="card-title text-danger">Total Deaths</h4>        
                    <p className="card-text font-weight-bold">{totalcount.deaths}+</p>    
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card border-success" style={{width:"15rem", height:"6rem"}}>
            
                <div className="card-body">
                    <h4 className="card-title text-success">Total Recovered</h4>        
                    <p className="card-text font-weight-bold">{totalcount.recovered}+</p>    
                </div>
            </div>
            </div>
            <div className="col">
            <div className="card border-warning" style={{width:"15rem" , height:"6rem"}}>
                
                <div className="card-body ">
                    <h4 className="card-title text-warning">Total Active</h4>        
                    <p className="card-text font-weight-bold">{totalcount.active}+</p>    
                </div>
            </div>
            </div>
        </div>
        <div className="container bg-info text-white">
            <p>*Latest update in sync with Worldometer</p>        
        </div>
            
        </div>
    )
}

export default Totalcount

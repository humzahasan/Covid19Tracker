import React from 'react'
import Spinner from './Spinner'

const Countrycount = ({count,country,cases,todayCases,deaths,todayDeaths,recovered,active,critical, loading}) => {
    
    if(loading) return (
        <Spinner />
    )

    return (

        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Cases</th>
                    <th scope="col">Today's Cases</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Today's Deaths</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Active</th>
                    <th scope="col">Critical</th>
                    
                    </tr>
                </thead>
        
                <tbody>
                    <tr>
                    <td>{country}</td>
                    <td className="text-primary">{cases}</td>
                    <td className="text-muted"> {todayCases} </td>
                    <td className="text-danger">{deaths}</td>
                    <td className="text-danger">{todayDeaths}</td>
                    <td className="text-success"> {recovered} </td>
                    <td className="text-info">{active}</td>
                    <td style={{color:'orange'}}>{critical}</td>
                    </tr>
                </tbody>
        </table>
    </div>
    
    )
    //counter = counter + 1;
    
}

export default Countrycount

/*country: "China"
cases: 81394
todayCases: 54
deaths: 3295
todayDeaths: 3
recovered: 74971
active: 3128
critical: 886
casesPerOneMillion: 57
deathsPerOneMillion: 2 */
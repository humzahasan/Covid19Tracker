import React from 'react'

function Table() {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Country</th>
                    <th scope="col text-primary">Cases</th>
                    <th scope="col">Today's Cases</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Today's Deaths</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Active</th>
                    <th scope="col">Critical</th>
                    
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Table

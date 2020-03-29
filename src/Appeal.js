import React from 'react'

const Appeal = () => {

    const precaution = [
        "Please wash your hands regularly.",
        "Avoid social gathering and follow social distancing.",
        "We all can fight this and win this.",
        "Stop community spread, by practising social distancing.",
        "Stay Home! Stay Safe!",
        "Utilize this time by developing new skills and hobbies.",
        "Spend time with your family.",
        "A healthy family is a happy family!"
    ]
    let num = Math.ceil(Math.random()*precaution.length)

    return (
        <div className="container-fluid mx-auto">
        <div className="row mx-auto">
            <div className="col mx-auto">
            <div className="card border-0 mx-auto" >
                <div className="card-body">
                    <h4 className="card-title text-info">An Appeal</h4>        
                    <p className="card-text text-justify font-weight-bold">An Appeal to all the people of the world to stay safe, stay indoor and co-operate with the governing body in order to fight this global pandemic.</p>    
                </div>
            </div>
            </div>
            <div className="col mx-auto">
            <div className="card border-0 mx-auto" style={{width:"18rem"}}>
                <div className="card-body">
                    <h4 className="card-title text-success">Thank You</h4>        
                    <p className="card-text text-justify font-weight-bold">A special word of thanks to all the people in the healthcare and emergency services who are doing their part to help us overcome this pandemic.</p>    
                </div>
            </div>
            </div>
            <div className="col mx-auto">
            <div className="card border-0 mx-auto" >
                <div className="card-body">
                    <h4 className="card-title text-primary">Help Nation fight back</h4>        
                    <p className="card-text text-justify font-weight-bold">Do your part by donating for the <a href="https://www.pmindia.gov.in/en/?query#">PM CARES Fund</a>. We can all join hands and fight this together.</p>    
                </div>
            </div>
            </div>
        </div>  
        <br/>  
        <p className="bg-success font-weight-bold ">{precaution[num]}</p>    
        </div>
    )
}

export default Appeal

/*
<div className="card text-center mx-auto">
  <div className="row mx-auto">
      <div className="col mx-auto">
  <div className="card-body mx-auto">
    <h4 className="card-title text-primary mx-auto">An Appeal</h4>        
    <p className="card-text text-justify font-weight-bold mx-auto">An Appeal to all the people of the world to stay safe, stay indoor and co-operate with the governing body in order to fight this global pandemic.</p>
    </div>
    </div>
    <div className="col mx-auto">
    <div className="card-body mx-auto">
    <h4 className="card-title text-info mx-auto">Thank You</h4>        
    <p className="card-text text-justify font-weight-bold mx-auto">A special word of thanks to all the people in the healthcare and emergency services who are doing their part to help us overcome this pandemic.</p>
    </div>
    </div>
    <div className="col mx-auto">
    <div className="card-body mx-auto">
    <h4 className="card-title text-danger mx-auto">Help Nation fight back</h4>        
    <p className="card-text text-justify font-weight-bold mx-auto">Do your part by donating for the <a href="https://www.pmindia.gov.in/en/?query#">PM CARES Fund</a>. We can all join hands and fight this together.</p>
    </div>
    </div>
    
  </div>
</div>
*/
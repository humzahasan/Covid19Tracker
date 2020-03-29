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
        <div className="container-fluid">
            <div className="card text-center">
  <div className="row">
      <div className="col">
  <div className="card-body">
    <h4 className="card-title text-primary">An Appeal</h4>        
    <p className="card-text font-weight-bold">An Appeal to all the people of the world to stay safe, stay indoor and corporate with the governing body in order to fight this global pandemic.</p>
    </div>
    </div>
    <div className="col">
    <div className="card-body">
    <h4 className="card-title text-info">Thank You</h4>        
    <p className="card-text font-weight-bold">A special word of thanks to all the people in the healthcare and emergency services who are doing their part to help us overcome this pandemic.</p>
    </div>
    </div>
    <div className="col">
    <div className="card-body">
    <h4 className="card-title text-danger">Help Nation fight back</h4>        
    <p className="card-text font-weight-bold">Do your part by donating for the <a href="https://www.pmindia.gov.in/en/?query#">PM CARES Fund</a>. We can all join hands and fight this together.</p>
    </div>
    </div>
    
  </div>
</div>
<p className="bg-success">{precaution[num]}</p>    
        </div>
    )
}

export default Appeal

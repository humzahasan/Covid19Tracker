import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer font-small cyan darken-3">
        <div className="container-fluid bg-info" style={{padding:'0',margin:'0'}}>
        <strong>Disclaimer : </strong> This website's only present the data from extracted from the websites mentioned. Users are advised to visit the respective website to verify data authenticity. The developer does not claim owning the data or its authenticity
          </div>
          <div className="container">
        
            <div className="row">
              <div className="col-md-12 py-5">
                <div className="mb-5 flex-center">
        
                  <a href="https://www.facebook.com/humza.hasan" className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a  href="https://twitter.com/thehumzahasan" className="tw-ic">
                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a href="https://www.linkedin.com/in/humzahasannit/" className="li-ic">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                </div>
              </div>
        
            </div>
        
          </div>
        
          <div className="footer-copyright text-center py-3">Developed in Reactjs by : 
            <a href="https://www.linkedin.com/in/humzahasannit/"> Humza Hasan</a>
          </div>
        
        
        </footer>
        
        
    )
}

export default Footer

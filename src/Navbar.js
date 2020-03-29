import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <nav class="navbar-brand font-weight-bold">COVID-19 TRACKER</nav>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Dashboard<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/country">Country Wise Count</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="www.google.com">Goverment Helplines</a>
      </li>
    </ul>
    
  </div>
</nav>

    )
}

export default Navbar

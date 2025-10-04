import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary ">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">NewsAPI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/about">About</a>
        </li> 
     
     
            <li className="nav-item"><a className="nav-link text-white" href="/about">Business</a> </li>
             <li className="nav-item">
          <a className="nav-link text-white" href="/about">Entertainment</a>
        </li>
             <li className="nav-item">
          <a className="nav-link text-white" href="/about">General</a>
        </li>
             <li className="nav-item">
          <a className="nav-link text-white" href="/about">Health</a>
        </li>
             <li className="nav-item">
          <a className="nav-link text-white" href="/about">Science</a>
        </li>
             <li className="nav-item">
          <a className="nav-link text-white" href="/about">Sports</a>
        </li>
             <li className="nav-item">
          <a className="nav-link text-white" href="/about">Technology</a>
        </li>
        </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bg-warning text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar


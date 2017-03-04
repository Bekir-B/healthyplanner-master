import React, { Component } from 'react';

class Profil extends Component {

  handleSubmit(e){
      console.log("Submitted");
      e.preventDefault();
      window.location='/SedmicniIzvjestaj';
  }


  render() {
    return (
      <div className="Profil">
      <div style={{width: "100%", height: "51px"}}></div>
              <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                      <p className="navbar-brand">Your profile</p>
                      <ul className="nav navbar-nav">

                      </ul>
                      <ul className="nav navbar-nav navbar-right" style={{marginRight: '0'}}>
                          <li>
                              <a href="/Login">
                                  Logout
                              </a>
                          </li>
                      </ul>
              </nav><br/>
              <form onSubmit = {this.handleSubmit}>
              <input type="submit" value="Generate weekly report"/>
              </form>
      </div>
    );
  }
}

export default Profil;

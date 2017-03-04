import React, { Component } from 'react';

class Login extends Component {

  /*handleSubmit(e){
      console.log("Submitted");
      e.preventDefault();
      window.location='/Profil';
  }*/

  render() {
    return (
      <div className="Login">
      <div class="row">
          <div class="col-xs-6">
            <a href="#" class="active" id="login-form-link">Login</a>
          </div>
          <div class="col-xs-6">
            <a href="#" id="register-form-link">Register</a>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Login;

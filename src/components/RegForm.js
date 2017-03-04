  import React, { Component } from 'react';

  class RegForm extends Component {

    handleSubmit(e){
        console.log("Submitted");
        e.preventDefault();
        window.location='/Profil';
    }

    render() {
      return (
        <div className="RegForm">
            <h3>Please input your information</h3>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label>Name</label><br/>
            <input type="text" /><br/>
            <label>Surname</label><br/>
            <input type="text" /><br/>
            <label>Date of Birth</label><br/>
            <input type="date"/><br/>
            <label>Password</label><br/>
            <input type="password"/><br/>
            <label>Confirm password</label><br/>
            <input type="password"/><br/>
            <label>E-mail</label><br/>
            <input type="text"/><br/><br/>
            </div>
            <input type="submit" value="Register"/>
            </form>
            
        </div>
      );
    }
  }

  export default RegForm;

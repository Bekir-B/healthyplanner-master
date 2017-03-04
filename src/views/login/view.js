import React from 'react';
import './style.css';
import {Link} from 'react-router';
export default class Login extends React.Component {

    onLoginSubmit(e){
        //saljes
        e.preventDefault();
        window.location='../profile/';
    }

    render(){
        return(
            <center>
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <p className="navbar-brand">Healthy Planner</p>
                    <ul className="nav navbar-nav">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/mealplan">Your Meal Plan</Link></li>
                        <li><Link to="/notifications">Notifications</Link></li>
                        <li><Link to="/report">Weekly/Monthly Report</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right" style={{marginRight: '0'}}>

                    </ul>
                </nav>
                <div id="content" >
                    <center> <a href="#"> <img id="main_logo" src="/img/logo.png" /></a> </center>

                    <div className="container padding">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="panel panel-login">
                                    <div className="panel-heading">
                                        <div className="row"></div>
                                        <h3>Please enter your credentials</h3>
                                        <hr />
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <form onSubmit={this.onLoginSubmit.bind(this)} style={{display: "block"}}>
                                                    <div className="form-group">
                                                        <input type="text" name="username" id="username" className="form-control" placeholder="E-Mail"
                                                        ref={(input) => this.email = input}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" name="password" id="password" className="form-control" placeholder="Password"
                                                        ref={(input) => this.password = input}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-sm-offset-3">
                                                                <input type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login" value="Log In" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="text-center">
                                                                    <Link to = "/register">New? Register here!</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        )
    }
}
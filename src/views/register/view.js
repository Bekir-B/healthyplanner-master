import React from 'react'
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
export default class Register extends React.Component {
    constructor() {
        super();
        this.form = {};
    }

    onRegisterSubmit(e) {
        e.preventDefault();
        const data = Date.parse(this.birthday.value);
        $.post("http://team1.spark-startup.com/user/create",
            {
                name: this.name.value,
                surname: this.surname.value,
                email: this.email.value,
                password: this.pass.value,
                birthdate: data
            }).done(function (data) {
            browserHistory.push("/profile");
        })
    }

    render() {
        return (
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
                <div id="content">
                    <center><a href="#"> <img id="main_logo" src="../img/logo.png"/></a></center>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="panel panel-login">
                                    <div className="panel-heading">
                                        <div className="row">


                                        </div>
                                        <hr/>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <form onSubmit={this.onRegisterSubmit.bind(this)}
                                                      style={{display: "block"}}>
                                                    <div className="form-group">
                                                        <input type="text" name="username" id="name"
                                                               className="form-control" placeholder="Name"
                                                               ref={(input => this.name = input)}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="username" id="surname"
                                                               className="form-control" placeholder="Surname"
                                                               ref={(input => this.surname = input)}/>
                                                    </div>


                                                    <div className="form-group">
                                                        <input type="email" name="username" id="email"
                                                               className="form-control" placeholder="Email"
                                                               ref={(input => this.email = input)}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="password" name="password" id="pass"
                                                               className="form-control"
                                                               placeholder="Password"
                                                               ref={(input => this.pass = input)}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" name="password" id="confirm"
                                                               className="form-control"
                                                               placeholder="Confirm password"
                                                               ref={(input => this.confirm = input)}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="text"><label> Birthday </label></div>
                                                        <input type="date" name="username" id="birthday"
                                                               className="form-control" placeholder="Birthday"
                                                               ref={(input => this.birthday = input)}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-sm-offset-3">
                                                                <input type="submit" name="login-submit"
                                                                       id="login-submit"
                                                                       className="form-control btn btn-login"
                                                                       value="Register"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="text-center">
                                                                    <Link to="/profile">Already have a
                                                                        profile? Login here!</Link>
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
        );
    }
}
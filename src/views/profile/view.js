import React from 'react'
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
export default class Profile extends React.Component {
    constructor() {
        super();
        this.form = {};
    }


onProfileSubmit(e){
    e.preventDefault();
   window.location="/notifications";
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

            <center><a href="#"> <img id="main_logo" src="../img/logo.png" title="Healthy Planner"/></a></center>


            <br/> <br/> <br/>
            <h4> Add the following data in order to analyze the <i> state of your health</i> and generate the
                weekly/monthly <i>medical report</i> regarding your <b> daily nutrition </b> intake:
            </h4>
                    <hr/>

                    <br/> <br/>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                            <center>
                                <div className="panel panel-login">

                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <form onSubmit={this.onProfileSubmit.bind(this)}
                                                      style={{display: "block"}}>
                                                    <div className="form-group">
                                                        <p className="labels">Weight</p>
                                                        <input type="text" name="username" id="weight"
                                                                className="form-control" placeholder="kg"
                                                               ref={(input => this.weight = input)}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <p className="labels">Height</p>
                                                        <input type="text" name="username" id="height"
                                                                className="form-control" placeholder="cm"
                                                               ref={(input => this.height = input)}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <p className="labels">Health issue: <br/><span>(You can select multiple diagnostics)</span>
                                                        </p>

                                                        <input type="checkbox" name="diagnostics" id="anemia" value="Anemia"
                                                               className="check_diagnostics"/>&nbsp;&nbsp; Anemia<br/>
                                                            <input type="checkbox" name="diagnostics"
                                                                   value="High Cholesterol"
                                                                   className="check_diagnostics"/>&nbsp;&nbsp; High
                                                                Cholesterol<br/>
                                                                    <input type="checkbox" name="diagnostics"
                                                                           value="Diabetes"
                                                                           className="check_diagnostics"/>&nbsp;&nbsp;
                                                                        Diabetes<br/>
                                                                            <input type="checkbox"
                                                                                   name="diagnostics"
                                                                                   value="Obesity"
                                                                                   className="check_diagnostics"/>&nbsp;&nbsp;
                                                                                Obesity<br/>

                                                    </div>
                                                    <br/>
                                                    <hr/>
                                                    <hr/>
                                                    <br/>
                                                    <div className="form-group">
                                                        <p className="labels">Allergies: <br/><span>(You can select multiple allergies)</span>
                                                        </p>
                                                        <input type="checkbox" name="allergies" value="Peanuts"
                                                               className="check_diagnostics"/>&nbsp;&nbsp; Peanuts<br/>
                                                            <input type="checkbox" name="allergies" value="Milk"
                                                                   className="check_diagnostics"/>&nbsp;&nbsp; Milk<br/>
                                                                <input type="checkbox" name="allergies" value="Egg"
                                                                       className="check_diagnostics"/>&nbsp;&nbsp;
                                                                    Egg<br/>
                                                                        <input type="checkbox" name="allergies"
                                                                               value="Strawberries"
                                                                               className="check_diagnostics"/>&nbsp;&nbsp;
                                                                            Strawberries<br/>
                                                                                <input type="checkbox"
                                                                                       name="allergies"
                                                                                       value="Gluten"
                                                                                       className="check_diagnostics"/>&nbsp;&nbsp;
                                                                                    Gluten<br/>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-sm-offset-3">
                                                                <input type="submit" name="login-submit"
                                                                       id="login-submit"
                                                                       className="form-control btn btn-login"
                                                                       value="Save"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="row">
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </center>
                            </div>
                        </div>
                    </div>


        </div>
        </center>
);
}
}
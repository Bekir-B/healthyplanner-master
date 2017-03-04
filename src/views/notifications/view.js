import React from 'react'
import {Link} from 'react-router';
export default class Notification extends React.Component {

    onSubmit(e){
        e.preventDefault();
        window.location="/mealplan";
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
            <center><a href="nalaz.html"> <img id="main_logo" src="../img/logo.png" title="Healthy Planner"/></a>
                </center>

                <br/> <br/> <br/>

                <h4> Add the following data in order to analyze the <i> state of your health</i> and generate the
                    weekly/monthly <i>medical report</i> regarding your <b>daily nutrition </b> intake:
                </h4>
                        <hr/>

                        <br/> <br/>
                        <h3><strong>Schedule your daily notifications for healthy meals: </strong></h3>

                        <br/>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-md-offset-4">
                                    <div className="panel panel-login">

                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-lg-12">

                                                    <form onSubmit={this.onSubmit.bind(this)}
                                                          style={{display: "block"}}>

                                                        <div className="form-group">
                                                            <img src="../img/breakfast.png" className="food_pngs"/>
                                                            <p className="labels">Breakfast</p>
                                                            <input type="text" name="username" id="username"
                                                                   className="form-control" placeholder="HH:MM"
                                                                   />
                                                        </div>

                                                        <br/> <br/> <br/> <br/>

                                                        <div className="form-group">
                                                            <img src="../img/schedule.png" className="food_pngs"/>
                                                            <p className="labels">Lunch</p>
                                                            <input type="text" name="username" id="username"
                                                                    className="form-control"
                                                                   placeholder="HH:MM"/>
                                                        </div>

                                                        <br/> <br/> <br/> <br/>

                                                        <div className="form-group">
                                                            <img src="../img/dinner.png" className="food_pngs"/>
                                                            <p className="labels">Dinner</p>
                                                            <input type="text" name="username" id="username"
                                                                   className="form-control"
                                                                   placeholder="HH:MM"/>
                                                        </div>


                                                        <br/> <br/> <br/> <br/>
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
                                </div>
                            </div>
                        </div>


            </div>
            </center>
    );
    }
    }
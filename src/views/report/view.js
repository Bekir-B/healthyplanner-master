import React from 'react'
import {Link} from 'react-router';
export default class Report extends React.Component {


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
                    <center>
                        <a href="nalaz.html"> <img id="main_logo" src="../img/logo.png" title="Healthy Planner"/></a>
                        <div id="txt"></div>
                    </center>
                    <div id="nalaz">
                        <center>
                            <div id="choose2"><h2 class="choose2"> Weekly report:  </h2></div>
                            <p> Nalaz iz baze </p>


                            <div id="choose2"><h2 class="choose2"> Monthly report: </h2></div>
                            <p id="nalaz"> Nalaz iz baze </p>

                        </center>
                    </div>
                    <br/><br/><br/><br/><br/>
                </div>

            </center>
        );
    }
}
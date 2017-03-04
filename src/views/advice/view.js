import React from 'react'
import {Link} from 'react-router';
export default class Advice extends React.Component {


    render() {
        return (
            <center>
                <div id="content">

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
                        <a href="nalaz.html"> <img id="main_logo" src="../img/logo.png" title="Healthy Planner"/></a>
                        <div id="txt"></div>
                    </center>

                    <center>

                        <div id="choose"><h2 className="choose"> Food you should eat more: </h2></div>
                        <p> Generisati iz baze ... </p>

                        <div id="choose"><h2 className="choose"> Food you should avoid to eat: </h2></div>
                        <p> Generisati iz baze ... </p>

                    </center>

                    <br/> <br/> <br/>



            </div>

            </center>
        );
    }
}
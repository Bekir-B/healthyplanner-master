import React from 'react'
import {Link} from 'react-router';

export default class MealPlan extends React.Component {


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
                        <div id=""></div>
                    </center>

                    <center>
                        <img id="recept_img" src="http://placehold.it/650x350"/>
                            <a href="#">
                                <img id="arrow_right" src="../img/arrow_right.png" title="Next recipe"/>
                            </a>
                    </center>

                    <div id="recipe">
                        <i>
                            <ul>
                                <li> Item 1</li>
                                <li> Item 2</li>
                                <li> Item 3</li>
                                <li> ... </li>
                                <li> Item n</li>
                            </ul>
                        </i>
                        <p>
                            Donec malesuada nibh risus, vitae consequat felis dictum eget. Pellentesque non malesuada neque. Duis venenatis laoreet urna, at porta tortor egestas eget. Proin blandit diam odio, eu lacinia nulla posuere non. Phasellus auctor malesuada ipsum, nec tempus est ultrices sit amet. Sed non varius sem. Sed venenatis mi justo, eu porta sapien consectetur eget. Fusce non magna leo. Maecenas euismod sapien in ullamcorper egestas. Nulla malesuada dolor non auctor posuere. Cras et hendrerit orci. Donec vel blandit mi, eget blandit lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sollicitudin sem velit, ut consequat massa congue sed.
                        </p>
                    </div>



                </div>
            </center>
        );
    }
}
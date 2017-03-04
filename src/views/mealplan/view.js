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
                        <img id="recept_img" src="./img/slika.jpg"/>
                            <a href="#">
                                <img id="arrow_right" src="../img/arrow_right.png" title="Next recipe"/>
                            </a>
                    </center>

                    <div id="recipe">
                        <i>
                            <ul>
                                <li> 1 Banana</li>
                                <li> 1/2 cup whole strawberries</li>
                                <li> 8 Blackberries (1/4 cup or so)</li>
                                <li> 1/2 cup nonfat milk </li>
                            </ul>
                        </i>
                        <p>
                            You can multiply the ingredients to make multiple servings.
                            Also, you can adjust the milk, add more or less to adjust thickness. I like it with body so I just add a little bit.

                            Directions

                            just put in the blender and blend, very yummy, makes a good breakfast. You can also adjust the sugar to your liking or substitute with splenda

                            Number of Servings: 1
                        </p>
                    </div>



                </div>
            </center>
        );
    }
}
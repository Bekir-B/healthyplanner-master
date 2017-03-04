import React from 'react'
import {Link} from 'react-router';
export default class CustomMeal extends React.Component {


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

                        <div id="choose"><h2 classNsme="choose"> Choose what you ate: </h2></div>

                        <form action="#" id="adding_items">
                            <hr/>
                            <input type="checkbox" name="meal" value="meal" className="new_meal"/> Breakfast <br/>
                                <input type="checkbox" name="meal" value="meal" className="new_meal"/> Lunch <br/>
                                    <input type="checkbox" name="meal" value="meal" className="new_meal"/> Dinner <br/>

                                        <hr/>
                                        <br/>

                                        <select>
                                            <option value="new_item">1. Milk 50ml</option>
                                            <option value="new_item">2. Yoghurt 10ml</option>
                                            <option value="new_item">3. Strawberry 10g</option>
                                            <option value="new_item">4. Banana 10g</option>
                                        </select>
                                        <br/>

                                        <a href="#" className="myButton myButton2">Add to my diet for today's meal at <span></span> </a>
                        </form>

                    </center>

                    <div id="recipe">

                    </div>

                    <br/> <br/> <br/>

                </div>
            </center>
        );
    }
}
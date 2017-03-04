import React from 'react'

export default class CustomMeal extends React.Component {


    render() {
        return (
            <center>
                <div id="content">

                    <center>
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
                                            <option value="new_item">1. Generate this item from DB</option>
                                            <option value="new_item">2. Generate this item from DB</option>
                                            <option value="new_item">3. Generate this item from DB</option>
                                            <option value="new_item">4. Generate this item from DB</option>
                                        </select>
                                        <br/>

                                        <a href="#" className="myButton myButton2">Add to my diet for today's meal at <span id="txt2"></span> </a>
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
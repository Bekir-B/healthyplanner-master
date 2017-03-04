import React from 'react'

export default class Advice extends React.Component {


    render() {
        return (
            <center>
                <div id="content">

                    <center>
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
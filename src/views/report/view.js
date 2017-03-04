import React from 'react'

export default class Report extends React.Component {


    render() {
        return (
            <center>
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
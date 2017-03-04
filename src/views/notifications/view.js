import React from 'react'

export default class Notification extends React.Component {


    render() {
        return (
            <center>
            <div id="content">
            <center><a href="nalaz.html"> <img id="main_logo" src="../img/logo.png" title="Healthy Planner"/></a>
                </center>

                <h3> Ovdje idu preuzeti podaci: <br/> Name:_________ <br/> Surname:________ <br/> Age:________ </h3>

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

                                                    <form id="login-form" action="#" method="post" role="form"
                                                          style={{display: "block"}}>

                                                        <div className="form-group">
                                                            <img src="../img/breakfast.png" className="food_pngs"/>
                                                            <p className="labels">Breakfast</p>
                                                            <input type="text" name="username" id="username"
                                                                   className="form-control" placeholder="HH:MM"
                                                                   value=""/>
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
                                                                <div className="col-lg-12">
                                                                    <a href="advice.html"
                                                                       className="forgot-password">Go to: Healthy
                                                                        Advice!</a>

                                                                </div>
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
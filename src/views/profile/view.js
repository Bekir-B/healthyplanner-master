import React from 'react'
import {Link} from 'react-router';
export default class Profile extends React.Component {


render() {
    return (
        <center>
        <div id="content">

            <center><a href="#"> <img id="main_logo" src="../img/logo.png" title="Healthy Planner"/></a></center>

            <h4> Ovdje idu preuzeti podaci: <br/> Name: ___________ <br/> Surname: ___________ <br/> Age: _______
            </h4>

            <br/> <br/> <br/>
            <h4> Add the following data in order to analyze the <i> state of your health</i> and generate the
                weekly/monthly <i>medical report</i> regarding your <b>daily nutrition </b> intake:
            </h4>
                    <hr/>

                    <br/> <br/>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                            <center>
                                <div className="panel panel-login">

                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <form id="login-form" action="#" method="post" role="form"
                                                      style={{display: "block"}}>
                                                    <div className="form-group">
                                                        <p className="labels">Weight</p>
                                                        <input type="text" name="username" id="username"
                                                                className="form-control" placeholder="kg"
                                                               value=""/>
                                                    </div>
                                                    <div className="form-group">
                                                        <p className="labels">Height</p>
                                                        <input type="text" name="username" id="username"
                                                                className="form-control" placeholder="cm"/>
                                                    </div>

                                                    <div className="form-group">
                                                        <p className="labels">Health issue: <br/><span>(You can select multiple diagnostics)</span>
                                                        </p>

                                                        <input type="checkbox" name="diagnostics" value="Anemia"
                                                               className="check_diagnostics"/>&nbsp;&nbsp; Anemia<br/>
                                                            <input type="checkbox" name="diagnostics"
                                                                   value="High Chloresterol"
                                                                   className="check_diagnostics"/>&nbsp;&nbsp; High
                                                                Chloresterol<br/>
                                                                    <input type="checkbox" name="diagnostics"
                                                                           value="Diabetes"
                                                                           className="check_diagnostics"/>&nbsp;&nbsp;
                                                                        Diabetes<br/>
                                                                            <input type="checkbox"
                                                                                   name="diagnostics"
                                                                                   value="Obesity"
                                                                                   className="check_diagnostics"/>&nbsp;&nbsp;
                                                                                Obesity<br/>

                                                    </div>
                                                    <br/>
                                                    <hr/>
                                                    <hr/>
                                                    <br/>
                                                    <div className="form-group">
                                                        <p className="labels">Allergies: <br/><span>(You can select multiple allergies)</span>
                                                        </p>
                                                        <input type="checkbox" name="allergies" value="Peanuts"
                                                               className="check_diagnostics"/>&nbsp;&nbsp; Peanuts<br/>
                                                            <input type="checkbox" name="allergies" value="Milk"
                                                                   className="check_diagnostics"/>&nbsp;&nbsp; Milk<br/>
                                                                <input type="checkbox" name="allergies" value="Egg"
                                                                       className="check_diagnostics"/>&nbsp;&nbsp;
                                                                    Egg<br/>
                                                                        <input type="checkbox" name="allergies"
                                                                               value="Strawberries"
                                                                               className="check_diagnostics"/>&nbsp;&nbsp;
                                                                            Strawberries<br/>
                                                                                <input type="checkbox"
                                                                                       name="allergies"
                                                                                       value="Gluten"
                                                                                       className="check_diagnostics"/>&nbsp;&nbsp;
                                                                                    Gluten<br/>
                                                    </div>

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
                                                                <Link to="/notifications">Go to notification
                                                                    settings plan!</Link>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </center>
                            </div>
                        </div>
                    </div>


        </div>
        </center>
);
}
}
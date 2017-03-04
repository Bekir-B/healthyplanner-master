import React from 'react'
import $ from "jquery";
export default class Something extends React.Component {

    onBezzeSubmit() {
        $.post("http://team1.spark-startup.com/food/create",
            {
                name: $("#productName").val(),
                calories: $("#calories").val(),
                fats: $("#saturatedFat").val(),
                proteins:$("#protein").val(),
                fibers:$("#fibers").val(),
                carbohydrates:$("#carbs").val(),
                sugars:$("#sugars").val(),
                vitamins:$("#vitamins").val(),
                minerals:$("#minerals").val()
        })

    }
    render() {
        return (
            <center>
                <div id="content">
                    <center><a href="#"> <img id="main_logo" src="../img/logo.png"/></a></center>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="panel panel-login">
                                    <div className="panel-heading">
                                        <div className="row">


                                        </div>
                                        <hr/>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <form onSubmit={this.onBezzeSubmit.bind(this)} style={{display: "block"}}>
                                                    <div className="form-group">
                                                        <input type="text" name="username" id="productName"
                                                               className="form-control" placeholder="Product Name" value=""/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="username" id="vitamin"
                                                               className="form-control" placeholder="Vitamin" value=""/>
                                                    </div>


                                                    <div className="form-group">
                                                        <input type="email" name="username" id="minerals"
                                                               className="form-control" placeholder="Minerals" value=""/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" name="username" id="calories"
                                                               className="form-control" placeholder="Calories" value=""/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="password" id="saturatedFat"
                                                               className="form-control"
                                                               placeholder="Saturated Fats"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="password" id="protein"
                                                               className="form-control"
                                                               placeholder="Protein"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="text"><label> Birthday </label></div>
                                                        <input type="text" name="username" id="fibers"
                                                               className="form-control" placeholder="Fibers"
                                                               value=""/>
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="text"><label> Birthday </label></div>
                                                        <input type="text" name="username" id="carbs"
                                                               className="form-control" placeholder="Carbohydrates"
                                                               value=""/>
                                                    </div><div className="form-group">
                                                    <div className="text"><label> Birthday </label></div>
                                                    <input type="text" name="username" id="sugars"
                                                           className="form-control" placeholder="Sugars"
                                                           value=""/>
                                                </div>
                                                    <div className="form-group">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-sm-offset-3">
                                                                <input type="submit" name="login-submit"
                                                                       id="login-submit"
                                                                       className="form-control btn btn-login"
                                                                       value="Insert"/>
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
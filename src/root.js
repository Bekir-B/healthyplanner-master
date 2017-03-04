import React from 'react'
import { browserHistory } from 'react-router';

export default class Root extends React.Component{
    componentWillMount(){
        //vidis jel logovan
        //if logovan posaljes ga na main screen
        //else
        browserHistory.push("/login");
    }

    render(){
        return(<div></div>);
    }
}
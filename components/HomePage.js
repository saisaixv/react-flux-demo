import React from 'react'
import MyButtonController from '../controller/MyButtonController'
import Header from './Header'


export default class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:''
        };
    }



    render(){
        return (
            <div>
                <Header
                title={this.state.title}/>
                <MyButtonController/>

            </div>
        );
    }
}
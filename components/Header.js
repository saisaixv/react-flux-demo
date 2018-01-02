import React from 'react'
import listStore from '../stores/ListStore'

import {
    SELECT
} from '../constant'

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:''
        }
    }

    componentDidMount(){
        console.log("componentDidMount")
        listStore.addChangeListener(SELECT,this._onSelect.bind(this))
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
        listStore.removeChangeListener(SELECT,this._onSelect.bind(this))
    }

    _onSelect(){
        console.log("_onSelect")
        this.setState({
            title:listStore.getSelect()
        })
    }

    render(){
        console.log("Header render")
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        );
    }
}

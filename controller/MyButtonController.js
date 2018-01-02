import React, {Component} from 'react'
import MyButton from '../components/MyButton'
import listStore from '../stores/listStore'
import ButtonActions from '../actions/ButtonActions'
import SelectActions from '../actions/SelectActions'
import Header from "../components/Header";

import {
    CHANGE
} from '../constant'

//对Action发生器进行初始化，buttonActions能发出不同类型action给Dispatcher
let buttonActions = new ButtonActions()
let selectActions=new SelectActions()

class MyButtonController extends Component {

    constructor(props) {
        //把props作为参数传递到super(),这样在constructor里即可访问this.props属性
        super(props)
        this.state = {
            items: [],
            title:''
        }
    }

    componentDidMount() {
        //在组件挂载后绑定组件的私有方法_onChange到Store,之后listStore状态变化即可通知组件调用_onChange方法进行改变
        listStore.addChangeListener(CHANGE,this._onChange.bind(this))
        // listStore.addChangeListener('select',this._onSelect.bind(this))
    }

    componentWillUnmount() {
        //在组件移除后解除绑定组件的私有方法_onChange到Store
        listStore.removeChangeListener(CHANGE,this._onChange.bind(this))
        // listStore.removeChangeListener('select',this._onSelect.bind(this))
    }

    //组件响应Store变化的回调函数
    _onChange() {
        this.setState({
            items: listStore.getAll()
        })
    }

    // _onSelect(){
    //     this.setState({
    //         title:listStore.getSelect()
    //     })
    // }

    render() {
        console.log("MyButtonController render")

        return (
            <div>
                <Header title={this.state.title}/>
                <MyButton
                    items={this.state.items}
                    onClick={this.createNewItem}
                    removeItem={this.removeItem}
                    selectItem={this.selectItem}
                />
            </div>
        )
    }

    createNewItem() {
        //调用Action发生器发出增加Item的Action
        buttonActions.addNewItem('new item')
    }

    removeItem(){
        let index=listStore.items.length-1;
        buttonActions.removeItem(index)
    }

    selectItem(index){
        console.log(`select index = ${index}`)
        selectActions.selectItem(index)
    }
}

export default MyButtonController

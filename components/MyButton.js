import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props)
        this.selectHandle=this.selectHandle.bind(this)
    }
    render(){
        return (
            <div>
                <button onClick={this.selectHandle}>{this.props.title}</button>
            </div>
        );
    }

    selectHandle(){
        this.props.select(this.props.index)
    }
}

class MyButton extends Component {

    constructor(props){
        super(props)
    }
    render() {
        console.log("MyButton render")
        let items = this.props.items;
        return (
            <div>
                <button onClick={this.props.onClick}>New Item</button>
                <button onClick={this.props.removeItem}>remove</button>
                <ul>
                    {items.map((result, key) => {
                        return (
                            <Item
                                key={key}
                                index={key}
                                title={result}
                                select={this.props.selectItem}></Item>
                        )
                    })}
                </ul>

            </div>
        )
    }

}

export default MyButton

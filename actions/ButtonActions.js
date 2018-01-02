import AppDispatcher from '../dispatcher/AppDispatcher'

class ButtonActions {

    //发送ADD_NEW_ITEM的Action的方法
    addNewItem(text) {
        //调用Dispatcher获取actionType为ADD_NEW_ITEM的Action
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        })
    }

    //发送REMOVE_ITEM的action的方法
    removeItem(index){
        AppDispatcher.dispatch({
            actionType:'REMOVE_ITEM',
            index
        })
    }
}

export default ButtonActions

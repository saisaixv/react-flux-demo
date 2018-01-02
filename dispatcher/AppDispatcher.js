import flux from 'flux'
import listStore from '../stores/listStore'

import {
    SELECT,
    CHANGE
} from '../constant'

//拿到flux模块里的Dispatcher类
let Dispatcher = flux.Dispatcher;
//用Dispatcher类new一个AppDispatcher对象
let AppDispatcher = new Dispatcher();

//调用register方法注册接收到各种actionType的Action之后的回调函数
AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            listStore.addNewItemHandler(action.text)
            listStore.emitChange(CHANGE)
            break;
        case 'REMOVE_ITEM':
            listStore.removeItemHandler(action.index)
            listStore.emitChange(CHANGE)
            break
        case 'SELECT_ITEM':
            console.log('SELECT_ITEM')
            listStore.selectItemHandler(action.index)
            listStore.emitChange(SELECT)
            break
        default:
    }
})

export default AppDispatcher

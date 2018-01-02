import AppDispatcher from '../dispatcher/AppDispatcher'

class SelectActions {

    selectItem(index){

        AppDispatcher.dispatch({
            actionType:'SELECT_ITEM',
            index
        })
    }
}

export default SelectActions
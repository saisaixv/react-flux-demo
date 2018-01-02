import EventEmitter from 'events'

class ListStore extends EventEmitter {

    constructor() {
        super()
        //初始化数据
        this.items = []
        this.selectItem=null
    }

    //返回所有数据的方法
    getAll() {
        return this.items
    }

    //返回选中的数据
    getSelect(){
        return this.selectItem
    }

    //增加数据的处理函数
    addNewItemHandler(text) {
        this.items.push(text)
    }

    //移除指定位置的数据的处理函数
    removeItemHandler(index){
        this.items.splice(index,1)
    }

    //选择指定位置数据的处理函数
    selectItemHandler(index){
        this.selectItem=this.items[index]
    }

    //提交变化
    emitChange(type) {
        // this.emit('change')
        console.log(`type = ${type}`)
        this.emit(type)
    }

    //监听函数，当有变化时调用注册的回调方法
    addChangeListener(type,callback) {
        // this.on('change', callback)
        this.on(type, callback)
        console.log(`type = ${type}`)
    }

    //remore监听函数
    removeChangeListener(type,callback) {
        // this.removeListener('change', callback)
        this.removeListener(type, callback)
    }
}

//new一个listStore作为单例暴露给其它模块使用
let listStore = new ListStore()

export default listStore
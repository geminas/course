import React,{Component,PropType} from 'react'
var createReactClass = require('create-react-class');

let TodoApp =createReactClass({
    getInitialState(){
        return {
            items:this.props.items||[]
        }
    },
    addTodo(text){
        let id=this.state.items.length==0?0:this.state.items[this.state.items.length-1].id+1
        this.setState({items:[...this.state.items,{id:id,msg:text}]})
    },
    deleteTodo(id){
        this.state.items.map((val,key)=>{
            if(key==id){
                
                let newitems=[...this.state.items]
                newitems.splice(key,1)
                this.setState({items:newitems})
            }
        })
    },
    render(){
        return (
            <div>
                <TodoView items={this.state.items} deleteTodo={this.deleteTodo}/>
                <TodoControl addTodo={this.addTodo}/>
            </div>
        )
    }
})


class TodoView extends Component{
    handleDelete(id){
       // console.log(e)
        //console.log(e.target)
        console.log("hahah",id)
        this.props.deleteTodo(id)
    }
    render(){
        return (
            <ul>
                {
                    this.props.items.map((v,k)=>{
                        return(
                            <li key={k}>
                                <label>{k}:</label>
                                <span>{v.msg}</span>
                                <span><button data-id={v.id} onClick={()=>{this.handleDelete(k)}}>DELETE</button></span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

class TodoControl extends Component{
    handleClick(e){
        this.props.addTodo(this.refs.ctl_input.value)
        this.refs.ctl_input.value=''
    }
    render(){
        return (
        <div>
            <input ref="ctl_input" id="todo-ctl-input" placeholder="You Can Write What You Wanna Do Here" type="text"/>
            <button onClick={this.handleClick.bind(this)} ><span>Add Todo</span></button>
        </div>
        )
    }
}
export default TodoApp
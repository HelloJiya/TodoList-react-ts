import React, { Component } from 'react'
import './index.scss'

import TodoListItem from './components/TodoListItem.jsx'

export default class TodoList extends Component {

  state = {
    todoList: [],
    curVal:''
  }

  changeInputVal = (e) =>{
    const val = e.target.value
    this.setState({curVal: val})
  }
  addItem = () =>{
    const { todoList, curVal } = this.state
    if(!curVal) return
    this.setState({ todoList: [curVal, ...todoList], curVal: ''})
  }

  delItem = (e, index) =>{
    const { todoList } = this.state
    todoList.splice(index, 1)
    this.setState({ todoList })
  }

  render() {
    const { todoList, curVal } = this.state
    return (
      <div className='todo-list'>
        <div className='todo-input-box'>
          <input value={ curVal } onChange={ this.changeInputVal } className='todo-input' />
          <button onClick={ this.addItem } className='button todo-input--button'>添加</button>
        </div>

        <ul className='todo-list-box'>
          {
            todoList.map((item, index) => {
              {/* return (
                <li key={ index } className='todo-list-item'>
                  <span>{ index + 1 }</span>  
                  <span className='todo-list-item--content'>{ item }</span> 
                  <button onClick={ e => this.delItem(e, index) } className='button todo-list--button'>删除</button>
                </li>        
              ) */}
              return <TodoListItem key={ index }  index={ index } delItem={ this.delItem } item={ item }/>
            })
          }
        </ul>

      </div>
    )
  }
}

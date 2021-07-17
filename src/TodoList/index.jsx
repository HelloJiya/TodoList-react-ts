import React, { Component } from 'react'

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
      <div>
        <div>
          <input value={ curVal } onChange={ this.changeInputVal } />
          <button onClick={ this.addItem }>添加</button>
        </div>

        <ul>
          {
            todoList.map((item, index) => {
              return (
                <li key={ index }>
                  { item }
                  <button onClick={ e => this.delItem(e, index) }>删除</button>
                </li>
              )
            })
          }
        </ul>

      </div>
    )
  }
}

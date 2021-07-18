import React, { Component } from 'react'

export default class TodoListItem extends Component {
  render() {
    const {index, item, delItem} = this.props
    return (
      <li key={ index } className='todo-list-item'>
        <span>{ index + 1 }</span>  
        <span className='todo-list-item--content'>{ item }</span> 
        <button onClick={ e => delItem(e, index) } className='button todo-list--button'>删除</button>
      </li>
    )
  }
}

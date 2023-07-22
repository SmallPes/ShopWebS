import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <div  className='main' id='item'>
        {this.props.items.map(el => (
        <Item onShowItem={this.props.onShowItem} key={el.id} item={el}/>
        ))}
      </div>
    )
  }
}

export default Items
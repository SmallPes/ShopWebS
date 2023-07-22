import React, { Component } from 'react'

export class Showfullitem extends Component {
  render() {
    return (
      <div>
         <div className='fullItem'>
        
        <h2>{this.props.items.title}</h2>
        <p>{this.props.items.desc}</p>
        <b>{this.props.items.price}</b>
       <div className='add-to-cart'>+</div>
      </div>
      </div>
    )
  }
}

export default Showfullitem
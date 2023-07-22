import React, { Component } from 'react'

export class categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key:'all',
                    name:'Все'

                },
                {
                  key:'1 категория',
                  name:'1 категория'
                },
                {
                  key:'2 категория',
                  name:'2 категория'
                },
                {
                  key:'3 категория',
                  name:'3 категория'
                },
                {
                  key:'4 категория',
                  name:'4 категория'
                },
                {
                  key:'5 категория',
                  name:'5 категория'
                },
                {
                  key:'6 категория',
                  name:'6 категория'
                },
                {
                  key:'7 категория',
                  name:'7 категория'
                },
                {
                  key:'8 категория',
                  name:'8 категория'
                },

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default categories
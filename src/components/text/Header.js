import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <div>
            <div className='logo'>Продажа сайтов</div>
           <div className='vav'>
              <div className='sas'><a href='#item'>Товары</a></div>
              <div className='sas'><a href='#AboutSus'>Про нас</a></div>
              <div className='sas'><a href=''>Контакты</a></div>
            </div>
        </div>
      </header>
    )
  }
}

export default Header
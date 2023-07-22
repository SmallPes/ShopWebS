import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItems: [],
      items: [
        {
          id:1,
          title:'Сайт 1',
          img:'black.jpg',
          desc:'Описание сайта 1',
          category:'1 категория',
          price:'Цена'
        },
        {
          id:2,
          title:'Сайт 2',
          img:'black.jpg',
          desc:'Описание сайта 2',
          category:'2 категория',
          price:'Цена'
        },
        {
          id:3,
          title:'Сайт 3',
          img:'black.jpg',
          desc:'Описание сайта 3',
          category:'3 категория',
          price:'Цена'
        },
        {
          id:4,
          title:'Сайт 4',
          img:'black.jpg',
          desc:'Описание сайта 4',
          category:'4 категория',
          price:'Цена'
        },
        {
          id:5,
          title:'Сайт 5',
          img:'black.jpg',
          desc:'Описание сайта 5',
          category:'5 категория',
          price:'Цена'
        },
        {
          id:6,
          title:'Сайт 6',
          img:'black.jpg',
          desc:'Описание сайта 6',
          category:'6 категория',
          price:'Цена'
        },
        {
          id:7,
          title:'Сайт 7',
          img:'black.jpg',
          desc:'Описание сайта 7',
          category:'7 категория',
          price:'Цена'
        },
        {
          id:8,
          title:'Сайт 8',
          img:'black.jpg',
          desc:'Описание сайта 8',
          category:'8 категория',
          price:'Цена'
        },
  
      ],
      showFullItem: false,
      fullitem: {}
    }
    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
     <Header/>
     <Categories chooseCategory={this.chooseCategory}/>
     <Items onShowItem={this.onShowItem} items={this.state.currentItems}/>
     <AboutUs/>
    </div>
  )
  }
  onShowItem(item) {
    this.setState({fullitem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
}

export default App;

import React, { Component } from 'react';
import Menu from './MenuComponents';
import DishDetail from './DishdetailComponent';
import {DISHES}  from '../Shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
class Main extends Component{
  constructor(props){
    super(props);
    this.state ={
       dishes : DISHES,
       selectedDish: null
   };
  }

  render(){
    return (
      <div className="App">
          <Header/>
        <Menu dishes={this.state.dishes}
            onClick={(dishId)=>this.OnDishSelect(dishId)}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
        <Footer />
      </div>
    );
  }

  OnDishSelect(dishId){
    this.setState({selectedDish : dishId})
}

}

export default Main;

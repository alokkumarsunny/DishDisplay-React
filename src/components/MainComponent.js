import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponents';
import DishDetail from './DishdetailComponent';
import {DISHES}  from '../Shared/dishes';
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">First App in React</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
            onClick={(dishId)=>this.OnDishSelect(dishId)}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
      </div>
    );
  }

  OnDishSelect(dishId){
    this.setState({selectedDish : dishId})
}

}

export default Main;

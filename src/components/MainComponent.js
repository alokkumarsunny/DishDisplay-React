import React, { Component } from 'react';
import Menu from './MenuComponents';
import {DISHES}  from '../Shared/dishes';
import {PROMOTIONS}  from '../Shared/promotions';
import {LEADERS}  from '../Shared/leader';
import {COMMENTS}  from '../Shared/comments';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch , Route, Redirect} from 'react-router-dom';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';

class Main extends Component{
  constructor(props){
    super(props);
    this.state ={
       dishes : DISHES,
       comments : COMMENTS,
       leaders : LEADERS,
       promotions : PROMOTIONS,
       selectedDish: null
   };
  }

  render(){
      const HomePage = () => {
          return <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      }

    const DishWithID =({match}) =>{
        return (
            <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
            comments ={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
            />
            );
    }

    const AboutUs = () =>{
       return (<About  leaders ={this.state.leaders}/>
        ); 
    }

    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithID} />
              <Route exact path='/aboutus' component={AboutUs} />              
              <Route exact path='/Contactus' component={Contact}/>
              <Redirect to="/home" />
          </Switch>
          <Footer/>
      </div>
    );
  }

  OnDishSelect(dishId){
    this.setState({selectedDish : dishId})
}

}

export default Main;

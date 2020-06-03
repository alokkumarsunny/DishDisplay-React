import React, {Component} from 'react';
import {Card,CardImg,CardImgOverlay ,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';
class Menu extends Component{
    constructor(props){
      super(props);
      this.state={
        selectedDish:null
      }
      console.log("Menu Component Constructor")  
    }
    componentDidMount(){
        console.log("Menu Component componentDidMount") 
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.OnDishSelect(dish)}>
                      
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );

        });
        return (
            <div className="container">
                <div className="row">               
                    {menu}
                </div>
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }

    OnDishSelect(dish){
        this.setState({selectedDish : dish})
    }
}
export default Menu;
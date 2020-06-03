import React, {Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
class DishDetail extends Component{
    constructor(props){
      super(props);
      this.state={
        selectedDish1:null
      }
      console.log("DishDetail Component Constructor Called")  
    }
    componentDidMount(){
        console.log("DishDetail Component componentDidMount Called") 
    }

    render(){
            return(
                <div className="row">
                    <div className="col-6 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-6 col-md-5 m-1">
                        <h1>Comments</h1>
                        {this.renderComment(this.props.selectedDish)}
                    </div>
                </div>
            );
    }
    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
               </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComment(dish){
        if(dish != null){
            const commentdiv = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {comment.date}</p>
                    </div>
                );
            });
            return(               
                commentdiv
            );
        }else{
            return(
                <div></div>
            );
        }
    }

}
export default DishDetail;
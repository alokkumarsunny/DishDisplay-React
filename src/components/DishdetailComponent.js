import React, {Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
class DishDetail extends Component{

    componentDidMount(){
        console.log("DishDetail Component componentDidMount Invoked") 
    }
    componentDidUpdate(){
        console.log("DishDetail Component componentDidUpdate Invoked") 
    }

    render(){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-5 m-1">
                            {this.renderDish(this.props.selectedDish)}
                        </div>
                        <div className="col-6 col-md-5 m-1">                           
                            {this.renderComment(this.props.selectedDish)}
                        </div>
                    </div>
                </div>
            );
    }
    renderDish(dish){
        console.log("DishDetail Component componentDidRender Invoked") 
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
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                );
            });
            commentdiv.unshift(<h3>Comments:</h3>)
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
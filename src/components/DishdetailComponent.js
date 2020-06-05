import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle ,Breadcrumb , BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
const DishDetail = (props) => {
    return(
        <div className="container">
             <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'> Home </Link>                          
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to='/menu'> Menu </Link>                           
                        </BreadcrumbItem>                       
                        <BreadcrumbItem active>
                            {props.selectedDish.name}
                        </BreadcrumbItem>                      
            </Breadcrumb>    
            <div className="col-12">
                            <h3>{props.selectedDish.name}</h3>
            </div>

            <div className="row">
                <div className="col-6 col-md-5 m-1">       
                    <RenderDish dish={props.selectedDish}/>
                </div>
                <div className="col-6 col-md-5 m-1">                           
                   <RenderComment comments = {props.comments}/>
                </div>
            </div>
        </div>
    );
}
    

    function RenderDish(props){
        if(props.dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={props.dish.image} alt={props.dish.name}/>
                    <CardBody>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    function RenderComment({comments}){
        if(comments != null){
            const commentdiv = comments.map((comment) => {
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
export default DishDetail;
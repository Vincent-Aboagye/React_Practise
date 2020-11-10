import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
            
        }
    }
 
    renderDish(dish) {
        if (dish != null){
            return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>

                    </Card>
            )
            }
            else{
                return(
                <div>

                </div>
                )
                
            }    
            
    }
    
    dishComments(comments){
        const comt = comments.comments.map((comment)=>{
            var d = (comment.date).substr(0, 10);

            if (comment !=null){

            return(
                <ul key={comment.id} className="list-unstyled">
                <li>
                    {comment.comment}                  
                </li>
                <li>
                    -- {comment.author}, {d}
                </li>
                </ul>
                )
            }
            else {
                return (
                    <div></div>
                )
            }
        })
        return(
            <>
                {comt}
            </>
        )    
    }

    renderComments(dish){
        if (dish !=null){
            return (
                <div>
                    <h4>Comments</h4>
                    {this.dishComments(dish)}   
                </div>
            )
        }
        else {
            return(
                <div>

                </div>
            )
            
        }

    }
    render(){  
        return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dishDetail)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dishDetail)}
                    </div>
                </div>
        )
    }
}

export default DishDetail;
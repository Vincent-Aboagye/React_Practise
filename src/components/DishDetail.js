import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


 
function RenderDish({dish}) {
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
    
function DishComments({comments}){
        const comt = comments.comments.map((comment)=>{

            if (comment !=null){

            return(
                <ul key={comment.id} className="list-unstyled">
                <li>
                    {comment.comment}                  
                </li>
                <li>
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric',month: 'short',day: '2-digit'}).format(new Date(Date.parse(comment.date)) )}
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


  const DishDetail = (props)=>{  
    if (props.dish !=null){   
    return(
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <DishComments comments={props.dish}/>  
                    </div>
                </div>
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


export default DishDetail;
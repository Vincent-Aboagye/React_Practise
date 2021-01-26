import React,{ useState } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, Label, Row, Col,
        BreadcrumbItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form'
import { Link } from 'react-router-dom';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);



function handleSubmit(values){
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));

}

function RenderDish({dish}) {
        if (dish != null){
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    {console.log(`${dish}`)}
                    </div>
            )}
            else{
                return (
                    <div>

                    </div>
                )    
            }    
            
    }
    
function RenderComments({comments}){

    const [modal, setmodal] = useState(false)
    const toggle = () => setmodal(!modal);
    
            if ( comments !=null ){
                return( 
                    <>
                    {/* Modal begins here */}
                    <div>
                        <Modal isOpen={modal} toggle={toggle} >
                            <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
                            <ModalBody>
                            <LocalForm onSubmit={(values)=>handleSubmit(values)}>
                            <Row className="form-group">
                            <Col md={6}>
                            <Label htmlFor="rate" >Rating</Label>
                            </Col>
                            
                            <Col md={12}>
                                  <Control.select model=".rate" name="rate" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={6}>
                                    <Label htmlFor="name" >Your Name</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators = {{ minLength: minLength(3), maxLength: maxLength(15) }} />
                                
                                    <Errors
                                        className= "text-danger"
                                        model=".name"
                                        show= "touched"
                                        messages={{
                                            minLength: "Must be more than 3 characters ",
                                            maxLength: "Must be less than 15 characters "
                                        }} 
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={6}>
                                    <Label htmlFor="message">Comment</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.textarea    
                                    model=".message" id="message" name="message" rows="6"
                                    className="form-control">                                            
                                    </Control.textarea>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                            </ModalBody>
                            
                        </Modal>
                    </div>
                    {/* End of Modal */}

                    <div className="col-12 col-md-5 m-1">  
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {comments.map((comment)=>{
                                return(
                                    <li  key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <p> -- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric',month: 'short',day: '2-digit'}).format(new Date(Date.parse(comment.date)) )}
                                        </p>                  
                                    </li>
                                );
                            })}
                        </ul>
                        <div>
                            {/* button to trigger modal */}
                        <Button type="button" className="btn btn-outline-dark" onClick={toggle}><i className="fa fa-pencil" ></i> Submit Comment</Button>
                        
                        </div>
                    </div>
                    </>
                )
            }
            else {
                return (
                    <div>Nothing to show
                        {console.log(comments)}
                    </div>
                )
            }
            
        }
          
    


  const DishDetail = (props)=>{  
    if (props.dish !=null){   
    return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                 <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                 </div>
             </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comment}/>                
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
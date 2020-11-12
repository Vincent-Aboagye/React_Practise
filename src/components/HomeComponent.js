import React from 'react';
import {Card, CardImg, CardBody, CardText,CardTitle, CardSubtitle} from 'reactstrap';


function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>
                    {item.name}
    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                </CardTitle>
                <CardText>{item.description}</CardText>

            </CardBody>
        </Card>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <dvi className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                </dvi>
                <dvi className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </dvi>
                <dvi className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </dvi>
            </div>
        </div>
    );
}

export default Home;
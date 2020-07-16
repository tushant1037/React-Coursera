import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const comments = this.props.dish.comments.map((comment) => {
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const month = new Date(comment.date).getMonth();
            const day = new Date(comment.date).getDay();
            const year = new Date(comment.date).getFullYear();
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {monthNames[month]} {day},{year}</p>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle heading>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
                </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    {comments}
                </div>
                </div>
            </div>
        );
    }
}
 
export default Dishdetail;
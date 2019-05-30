import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
export default class CardUserWishesComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            content: '',
            seeflag: true,
            text: "see more"
        };
        this.seeMore = this.seeMore.bind(this);
        this.seeLess = this.seeLess.bind(this);
        this.handelText = this.handelText.bind(this);
    }
    componentDidMount() {
        this.setState({ content: `${this.props.wishContent.substring(0, 70)}...` });
    }

    seeMore() {
        this.setState({ content: this.props.wishContent, seeflag: false });
    }
    seeLess() {
        this.setState({ content: `${this.props.wishContent.substring(0, 70)}...`, seeflag: true });
    }
    handelText() {

        if (this.state.seeflag) {
            this.setState({ text: "see less" });
            this.seeMore();
        }
        else {
            this.setState({ text: "see more" });
            this.seeLess();
        }
    }
    render() {
        return <>
            <Col>
                <Card style={{ width: '19rem', marginBottom: "15px" ,height:'22rem'}}>
                    <Card.Img variant="top" width="150px" height="150px" src={this.props.imageURL} />
                    <Card.Body>
                        <Card.Title>{this.props.from}</Card.Title>
                        <Card.Text>
                            {this.state.content}
                        </Card.Text>
                        <Button variant="primary" onClick={this.handelText} >{this.state.text}</Button>
                        <NavLink className="navbarClass btn text-primary" to={"/UpdateWishComponent/" + this.props.id} activeClassName="text-warning">
                                Update
                        </NavLink>
                        <Button variant="primary" onClick={this.handelText} style={{ border: "2px solid red" }}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>;
    }
}
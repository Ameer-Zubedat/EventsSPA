import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

export default class CardComponent extends React.Component {
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
        this.setState({ content: `${this.props.body.substring(0, 70)}...` });
    }

    seeMore() {
        this.setState({ content: this.props.body, seeflag: false });
    }
    seeLess() {
        this.setState({ content: `${this.props.body.substring(0, 70)}...`, seeflag: true });
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
                <Card style={{ width: '19rem', marginBottom: "15px" }}>
                    <Card.Img variant="top" width="150px" height="150px" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.from}</Card.Title>
                        <Card.Text>
                            {this.state.content}
                        </Card.Text>
                        <Button variant="primary" onClick={this.handelText}>{this.state.text}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>;
    }
}
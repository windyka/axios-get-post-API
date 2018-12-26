import React, { Component } from 'react';
import Authors from './Author'
import Books from './Book'
import { Row, Col } from 'reactstrap'

class Homes extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={4}>
                        <Authors />
                    </Col>
                    <Col md={4}>
                        <Books />
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Homes;
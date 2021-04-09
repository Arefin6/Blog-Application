import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './Sidebar/Sidebar';

const HomeMain = () => {
    return (
        <div>
            <Row>
                <Col md={4}>
                <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                
                </Col>
            </Row>
            
        </div>
    );
};

export default HomeMain;
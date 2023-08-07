import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import small from "../Asset/Images/samll.webp";

function HomeTop(props) {
    return (
        <Fragment>
            <Container fluid="true" className="homeBack">
                <Row>
                    <Col>
                        <div className="overLay">
                            <div className="content">
                                <img className="small" src={small}  alt=""/>
                                <h4 className="explore">Explore & create!</h4>
                                <h5 className="subTitle">ENJOY THE DIFFERENCE</h5>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </Fragment>
    );
}

export default HomeTop;
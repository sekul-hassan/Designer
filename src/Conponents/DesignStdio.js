import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

function DesignStdio(props) {
    return (
        <Fragment>
            <Container fluid="true" className="mt-4 p-4">
                <Row>
                   <Col lg={6} md={6} sm={12}>
                       <img className="stdioImg" src="https://designer.oceanwp.org/wp-content/uploads/2020/12/img-456765.png" alt=""/>
                   </Col> 
                   <Col lg={6} md={6} sm={12}>
                       <div>
                           <h3 className="bTitle">WELCOME TO DESIGNER STUDIO</h3>
                           <p className="bDes">Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quam augue, elementum at dui quis, condimentum iaculis arcu. Nullam metus lectus, lobortis nec tempus eu, posuere at risus. Aliquam pretium et ex id eleifend.</p>
                           <h5 bSubTitle>NULLAM GRAVIDA EROS ID ARCU VOLUTPAT SCELERISQUE.</h5>
                           <p className="bDes">Aliquam pretium et ex id eleifend. Sed fermentum, nulla a ultrices hendrerit, diam nulla maximus orci, in placerat ex arcu mollis ante. Praesent rhoncus bibendum quam vitae congue. Nullam gravida eros id arcu volutpat scelerisque.</p>
                           <button className="readMore">READ MORE</button>
                           <button className="contact">CONTACT US</button>
                       </div>
                   </Col> 
                </Row>
            </Container>
        </Fragment>
    );
}

export default DesignStdio;
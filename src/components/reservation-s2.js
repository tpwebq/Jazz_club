import {Col,Container,Row} from "react-bootstrap";
import OrderDetails from "./order-details";
import PaymentData from "./payment-data";
import PersonalData from "./personal-data";

function ReservationS2(){
    return(
        <Container fluid className="reservation-s2 minh-75vh d-flex align-items-start py-5">
            <Row className="w-100 mx-0 mt-5">
                <Col xs={12} md={6}>
                    <OrderDetails/>
                </Col>
                <Col xs={12} md={6}>                    
                    <PersonalData/>
                </Col>
                <Col xs={12}>                    
                    <PaymentData/>
                </Col>
            </Row>
        </Container>   
    );
}
export default ReservationS2;
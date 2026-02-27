import { useParams } from "react-router-dom";
import events from "../data/events";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const EventDetails = () => {

    const { name } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = events.find((e) => e.name === name);
    setEvent(foundEvent);
  }, [name]);

    // const event = events.find(e => e.name === name);


    
    if (!event) {
        return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1>Event Not Found</h1>
                </Col>
            </Row>
        </Container>
        );
    }

  return (
    <div>
      {event && (
        <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card.Img
            variant="top"
            src={`/images/${event.img}`}
            alt="Product Img"
            height="300"
          />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <h1>{event.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Description</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{event.description}</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h5>Price</h5>
            </Col>
            <Col>
              <p style={{ marginLeft: "50px" }}>{event.price} DT</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
      )}
    </div>
  );
};

export default EventDetails;
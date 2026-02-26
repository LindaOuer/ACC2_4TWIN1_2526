import eventsJson from "../data/events.json";
import React, { useEffect, useState } from "react";
import Event from "./Event";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

export default function Events() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isShowBuyAlert, setIsShowBuyAlert] = useState(false);

  useEffect(() => {
    const isWelcomeTimeout = setTimeout(() => {
      setIsWelcome(false);
    }, 3000);

    return () => {
      clearTimeout(isWelcomeTimeout);
    };
  }, []);

  const showBuyAlert = () => {
    setIsShowBuyAlert(true);
    setTimeout(() => {
      setIsShowBuyAlert(false);
    }, 2000);
  };

  return (
    <div>
      {isWelcome && (
        <Alert className="mb-4 mx-auto w-100" style={{ maxWidth: "800px" }} variant="success">
          Hey welcome to Esprit Events
        </Alert>
      )}
      {isShowBuyAlert && (
        <Alert className="mt-4 mx-auto w-100" style={{ maxWidth: "800px" }} variant="primary">
          You have booked an event
        </Alert>
      )}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {eventsJson.map((eventItem, index) => (
          <Event key={index} event={eventItem} showBuyAlert={showBuyAlert} />
        ))}
      </Row>
      
    </div>
  );
}
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import Cardsdata from "./CardsData";

export const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Project</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <React.Fragment key={id}>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className=" col-lg-12"
                      onClick={() => send(element)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DLT } from "../redux/actions/action";

export const MenuBar = ({ anchorEl, open, handleClose, data }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

  const dlt = (id) => {
    console.log(id);
    dispatch(DLT(id));
  };

  useEffect(() => {
    const total = () => {
      let price = 0;
      data.map((el) => (price = el.price * el.qnty + price));
      setPrice(price);
    };
    total();
  }, [data]);

  // console.log(data);
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {data.length ? (
        <div className="card_details" style={{ width: "24rem", padding: 10 }}>
          <Table>
            <thead>
              <tr>
                <th>Photos</th>
                <th>Restaurant Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, i) => {
                return (
                  <React.Fragment key={i}>
                    <tr>
                      <td>
                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                          <img
                            src={e.imgdata}
                            alt="img"
                            style={{ width: "5rem", height: "5rem" }}
                          />
                        </NavLink>
                      </td>
                      <td>
                        <p>{e.rname}</p>
                        <p>Price: ₹ {e.price}</p>
                        <p>Quantity: ₹ {e.qnty}</p>
                        <p
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => dlt(e.id)}
                        >
                          <i className="fas fa-trash smalltrash"></i>
                        </p>
                      </td>
                      <td
                        onClick={() => dlt(e.id)}
                        className="mt-5"
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                      >
                        <i className="fas fa-trash largetrash" />
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="text-center">Total : ₹ {price}</td>
              </tr>
            </tfoot>
          </Table>
        </div>
      ) : (
        <div
          className="card_details d-flex justify-content-center align-items-center"
          style={{
            width: "24rem",
            padding: 10,
            position: "relative",
          }}
        >
          <i
            className="fas fa-close smallclose"
            style={{
              position: "absolute",
              top: 2,
              right: 20,
              fontSize: 23,
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
          <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
          <img
            src="cart.gif"
            alt="Cart-Img"
            className="emptycart_img"
            style={{ width: "5rem", padding: 10 }}
          />
        </div>
      )}
    </Menu>
  );
};

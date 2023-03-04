import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADD, DLT, REMOVE } from "../redux/actions/action";

export const CartsDetails = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  // console.log("data", data);

  const { id } = useParams();
  // console.log("id", id);

  const getData = useSelector((state) => state.cartReducer.carts);
  const dispatch = useDispatch();
  // console.log("getData", getData);

  const dlt = (id) => {
    dispatch(DLT(id));
    navigate("/");
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id === Number(id);
    });
    // console.log("compareData", compareData);
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <React.Fragment>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        <section className="container mt-3">
          <div className="iteamsdetails py-4">
            {data &&
              data.map((ele, i) => {
                return (
                  <React.Fragment key={i}>
                    <div className="items_img">
                      <img src={ele.imgdata} alt="img" />
                    </div>

                    <div className="details">
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <p>
                                <strong>Restaurant</strong> : {ele.rname}
                              </p>
                              <p>
                                <strong>Price</strong> : ₹ {ele.price}
                              </p>
                              <p>
                                <strong>Dishes</strong> : {ele.address}
                              </p>
                              <p>
                                <strong>Total</strong> : ₹{" "}
                                {ele.price * ele.qnty}{" "}
                              </p>
                              <div
                                className="mt-5 d-flex justify-content-between align-items-center"
                                style={{
                                  width: 100,
                                  cursor: "pointer",
                                  background: "#ddd",
                                  color: "#111",
                                }}
                              >
                                <span
                                  style={{ fontSize: 24 }}
                                  onClick={
                                    ele.qnty <= 1
                                      ? () => dlt(ele.id)
                                      : () => remove(ele)
                                  }
                                >
                                  -
                                </span>

                                <span style={{ fontSize: 22 }}>{ele.qnty}</span>

                                <span
                                  style={{ fontSize: 24 }}
                                  onClick={() => send(ele)}
                                >
                                  +
                                </span>
                              </div>
                            </td>
                            <td>
                              <p>
                                <strong>Rating: </strong>{" "}
                                <span
                                  style={{
                                    padding: "2px 5px",
                                    borderRadius: "5px",
                                    background: "green",
                                    color: "#fff",
                                  }}
                                >
                                  {ele.rating} ★
                                </span>
                              </p>
                              <p>
                                <strong>Order Review : </strong>{" "}
                                <span> {ele.somedata}</span>
                              </p>
                              <p>
                                <strong>Remove: </strong>{" "}
                                <span onClick={() => dlt(ele.id)}>
                                  <i
                                    className="fas fa-trash"
                                    style={{
                                      fontSize: 20,
                                      cursor: "pointer",
                                      color: "red",
                                    }}
                                  ></i>
                                </span>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

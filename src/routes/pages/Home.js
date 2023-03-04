import React from "react";
import { Parent } from "../../propvalidations/Parent";
import { useAuth } from "./../auth";
import { Parent as Prt } from "../../propvalidations/Parent";

export const Home = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div>
      <h1>This is home page</h1>
      <Prt />
    </div>
  );
};

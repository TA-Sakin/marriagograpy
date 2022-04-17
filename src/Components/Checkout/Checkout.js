import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  return (
    <div style={{ minHeight: "70vh" }}>
      <h3 className="text-center py-5">Checkout {id}</h3>
    </div>
  );
};

export default Checkout;

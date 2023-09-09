import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AddedToCartMessageComponent = ({
  setShowCartMessage,
  showCartMessage,
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Alert
      show={showCartMessage}
      variant="success"
      onClose={() => setShowCartMessage(false)}
      dismissible
    >
      <Alert.Heading>The Product is added to cart</Alert.Heading>
      <p>
        <Button variant="success" onClick={goBack}>Go Back</Button>{" "}
        <Link to="/cart">
          <Button variant="danger">Go to Cart</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;

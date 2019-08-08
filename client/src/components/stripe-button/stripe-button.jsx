import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_xapbAGlVfSifRMbe2R7tKOG600INCdo7gX";

  const onToken = token => {
    console.log(token);
    alert("payment successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useEffect } from "react";

const PaypalButton = ({ currency, amount }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency]);

  return (
    <>
      {isPending && <div className="spinner" />}
      <PayPalButtons
        style={{ layout: "horizontal" }}
        disabled={isPending}
        forceReRender={[amount, currency]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                    currency_code: currency,
                  },
                },
              ],
            })
            .then((orderId) => {
              return orderId;
            });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            console.log("Transaction completed by", details);
          });
        }}
      />
    </>
  );
};

const Paypal = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "test",
          components: "buttons",
          currency: "AUD"
      }}
    >
      <PaypalButton currency="AUD" amount={1.99} />
    </PayPalScriptProvider>
  );
};

export default Paypal;

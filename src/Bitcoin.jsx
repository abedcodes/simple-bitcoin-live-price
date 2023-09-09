import { useEffect, useRef, useState } from "react";

export default function Bitcoin() {
  const [price, setPrice] = useState(0);
  const intervalRef = useRef(null);

  // mount stage
  useEffect(function () {
    intervalRef.current = setInterval(function () {
      fetch("https://api.coinlore.net/api/ticker/?id=90").then((resp) =>
        resp.json().then((data) => setPrice(data[0].price_usd))
      );
    }, 3000);

    //unmount stage
    return function () {
      clearInterval(intervalRef);
      console.log(
        `bitcoin component removed along with interval with id ${intervalRef.current}`
      );
    };
  }, []);

  return (
    <>
      <h2>
        Bitcoin Price: <span className="text-4xl">{price}</span> usd
      </h2>
    </>
  );
}

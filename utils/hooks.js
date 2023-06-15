import { useState, useEffect, useCallback } from "react";

import { getSymbols, findByValue } from "../utils";
import { CRYPTOCURRENCIES } from "../configs";

const useTicker = () => {
  const [cryptocurrencies,setcryptocurrencies] =useState(CRYPTOCURRENCIES);
  const fetchcrypto = useCallback(async()=>{
    try {
      const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(getSymbols())}`)
      const data = await response.json();

      setcryptocurrencies(
        cryptocurrencies.map((item) => {
          const{ lastPrice, lowPrice, highPrice} = findByValue(data,item.symbol) || {};
          return {
            ...item,
            highPrice,
            lowPrice,
            price:lastPrice,
            prevPrice:item?.price || 0,
        };
        })
      );
      console.log(data);

} catch (error) {
       console.log(error); 
    }
  },[cryptocurrencies]);

 useEffect(() => {
  const interval = setInterval(fetchcrypto,5000);
  return () =>clearInterval(interval);
 }

 );

  return cryptocurrencies;

  // TODO: Fetch crypto using Binance API and map it out.
  // For this example, we will fetch the data every 5 seconds. In future, we will do the same job by using the Web Sockets API.
  // More improvements and features are on your way.
  // Stay tuned.
};

export { useTicker };

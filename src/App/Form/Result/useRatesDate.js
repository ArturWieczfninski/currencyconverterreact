import { useState, useEffect } from "react";

export const useRatesDate = () => {
  const [ratesDate, setRatesDate] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const key = "430b719ef003302046270f0f8fdf7cd6dacb";
        const base = "USD";
        const output = "json";

        const url = `https://currencyapi.net/api/v1/rates?key=${key}&base=${base}&output=${output}`;
        const headers = {
          Accept: "application/json",
        };

        const response = await fetch(url, { headers });
        const data = await response.json();
        console.log(data);

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const { rates, date } = data;

        setRatesDate({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesDate({
          state: "error",
        });
      }
    };

    setTimeout(fetchRates, 1000);
  }, []);
  return ratesDate;
};

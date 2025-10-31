import { useState } from "react";


const useOnSubmit = (calculateResult, setResult) => {
  const [calculateResult, setResult] = useState();
  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);

    const calculateResult = (currency, amount) => {
      const rate = currencies.find(({ short }) => short === currency).rate;

      setResult({
        sourceAmount: +amount,
        targetAmount: amount / rate,
        currency,
      });
      result = { result };
      calculateResult = { calculateResult };
    };
  };
    return { onSubmit, calculateResult };
};

export { useOnSubmit };


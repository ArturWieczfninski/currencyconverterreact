import { useState } from "react";
import { Result } from "./Result";
import { 
  Button, 
  Filed,
   Header, 
   Info, 
   LabelText, 
   Loading, 
   Faliture } from "./styled";

import { useRatesDate } from "./Result/useRatesDate";



export const Form = () => {
  const ratesDate = useRatesDate();
  const [result, setResult] = useState();
  
  const calculateResult = (currency, amount) => {
    const rate = ratesDate.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("PLN");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form  onSubmit={onSubmit}>
      <Header>
        Przelicznik walut
        </Header>
        {ratesDate.state === "loading" 
        ? (
        <Loading>Ładowanie kursów...
        </Loading>
        )
        : ratesDate.state === "error" ? (
        <Faliture>Błąd pobierania kursów</Faliture>
        ) : (
          <>
      <p>
        <label>
          <LabelText>
            Kwota w złotówkach:
            </LabelText>
          <Filed        
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zł"
            type="number"
            required
            step="0.01"
          />
            </label>
              </p>
              <p>
              <label>
          <LabelText>
            Waluta:
            </LabelText>
          <Filed
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {Object.keys(ratesDate.rates).map((currency => (
              <option 
              key={currency}
              value={currency}
              >
                {currency}
            </option>
            )))}
          </Filed>
        </label>
      </p>
      <p>
        <Button>Przelicz</Button>
      </p>
      <Info>
         Kursy walut pobierane z Europejskiego Banku Centralnego z dnia: {ratesDate.date}
      </Info>
       <Result result={result}/>
        </> 
        )}
    </form>
  );
};


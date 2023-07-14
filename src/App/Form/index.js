import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <from className="from" onSubmit={onSubmit}>
      <h1 className="from__header">Przelicznik walut</h1>
      <p>
        <label>
          <span className="from__labelText">Kwota w zł*:</span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zł"
            className="from__field"
            type="number"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <span>Watuta:</span>
          <select
            className="from__filed"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currencies) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </p>
      <p>
        <button className="from__button"> Przelicz!</button>
      </p>
      <p>
        Kursy pochodzą ze strony internetowej nbp.pl
      </p>

      <Result result={result}/>
    </from>
  );
};

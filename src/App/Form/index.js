import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { useOnSubmit } from "./useOnSubmit";
import { Button, Filed, Header, Info, LabelText } from "./styled";

export const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  useOnSubmit();
  const { onSubmit, calculateResult } = useOnSubmit();

 
    return (
      <form onSubmit={onSubmit}>
        <Header>Przelicznik walut</Header>
        <p>
          <label>
            <LabelText>Kwota w złotówkach:</LabelText>
            <Filed
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w zł"
              className="form__field"
              type="number"
              required
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <LabelText>Waluta:</LabelText>
            <Filed
              as="select"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.Name}
                </option>
              ))}
            </Filed>
          </label>
        </p>
        <p>
          <Button>Przelicz</Button>
        </p>
        <Info>Kursy pochodzą ze strony internetowej nbp.pl</Info>
        <Result result />
      </form>
    );
  };


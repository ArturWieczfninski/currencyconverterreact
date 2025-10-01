import { useState, useEffect } from 'react';
import "./style.css";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalId);
        };
    }, []);

  return (
    <div className="clock">
        Dzisiaj jest
        {" "}
      {date.toLocaleTimeString(undefined, {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "long",
      })}
    </div>
  )
};
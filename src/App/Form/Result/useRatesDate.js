import {useState, useEffect} from 'react';

export const useRatesDate = () => {
    const [ratesDate, setRatesDate] = useState({
        state: "loading",
    });
    useEffect(() => {
        const fetchRatesDate = async () => {
            try {
                const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/{tabela}/ostatni/{topCount}/');
                if (!response.ok) {
                    throw new Error(response.statusText); 
                }
                const {rates, date} =  await response.json();
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

        setTimeout(fetchRatesDate, 1000 );
    }, []);

    return ratesDate;
};


import {useState, useEffect} from 'react';

export const useRatesDate = () => {
    const [ratesDate, setRatesDate] = useState({
        state: "loading",
    });
    useEffect(() => {
        const fetchRatesDate = async () => {
            try {
                const response = await fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_eXVUMntKdJ2L4mUbmTQWf6rNyYnPQyTJkvnG96RA');
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


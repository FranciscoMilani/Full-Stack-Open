import { useEffect, useState } from "react";
import countryService from "./services/countryService";
import CountriesSection from "./components/CountriesSection";

function App() {
    const [country, setCountry] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        countryService.getAll().then((data) => {
            setAllCountries(data);
        });
    }, []);

    const onChangeHandler = (event) => {
        const raw = event.target.value;
        const str = raw.trim().toLowerCase();

        const filtered = allCountries.filter((x) =>
            x.name.official.toLowerCase().includes(str, 0)
        );

        if (str === "") setFilteredCountries([]);
        else setFilteredCountries(filtered);

        setCountry(raw);
    };

    return (
        <>
            <div>
                <p style={{ display: "inline" }}>
                    Find countries (by official name) &nbsp;
                </p>

                <input
                    type="text"
                    value={country}
                    onChange={onChangeHandler}
                ></input>
            </div>

            <CountriesSection
                country={country}
                filteredCountries={filteredCountries}
            />
        </>
    );
}

export default App;

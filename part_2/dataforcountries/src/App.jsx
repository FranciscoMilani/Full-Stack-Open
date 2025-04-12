import { useEffect, useState } from "react";
import countryService from "./services/countryService";
import CountriesSection from "./components/CountriesSection";

function App() {
    const [country, setCountry] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [allCountries, setAllCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        countryService.getAll().then((data) => {
            setAllCountries(data);
        });
    }, []);

    const typingHandler = (event) => {
        const raw = event.target.value;
        const str = raw.trim().toLowerCase();

        const filtered = allCountries.filter((x) =>
            x.name.official.toLowerCase().includes(str, 0)
        );

        if (str === "") setFilteredCountries([]);
        else setFilteredCountries(filtered);

        setSelectedCountry(null);
        setCountry(raw);
    };

    const showHandler = (name) => {
        const countryToShow = filteredCountries
            .filter((c) => c.name.official === name)
            .pop();

        setSelectedCountry(countryToShow);
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
                    onChange={typingHandler}
                ></input>
            </div>

            <CountriesSection
                country={country}
                filteredCountries={filteredCountries}
                showHandler={showHandler}
                selectedCountry={selectedCountry}
            />
        </>
    );
}

export default App;

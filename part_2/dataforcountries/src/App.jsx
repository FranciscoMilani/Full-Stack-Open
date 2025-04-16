import { useEffect, useState } from "react";
import countryService from "./services/countryService";
import CountriesSection from "./components/CountriesSection";
import SearchFilter from "./components/SearchFilter";

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
            <SearchFilter
                country={country}
                typingHandler={typingHandler}
            ></SearchFilter>

            <CountriesSection
                filteredCountries={filteredCountries}
                showHandler={showHandler}
                selectedCountry={selectedCountry}
            />
        </>
    );
}

export default App;

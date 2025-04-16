import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";

export default function CountriesSection({
    filteredCountries,
    showHandler,
    selectedCountry,
}) {
    let content;
    const overLimit = filteredCountries.length > 10;

    if (overLimit) {
        content = <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length === 1) {
        content = <CountryDetail country={filteredCountries[0]} />;
    } else if (selectedCountry) {
        content = <CountryDetail country={selectedCountry} />;
    } else if (filteredCountries.length > 1) {
        content = (
            <CountryList
                filteredCountries={filteredCountries}
                showHandler={showHandler}
            />
        );
    }

    return <div>{content}</div>;
}

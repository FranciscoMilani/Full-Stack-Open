import CountryDetail from "./CountryDetail";

export default function CountriesSection({ country, filteredCountries }) {
    let content;
    const overLimit = filteredCountries.length > 10; // || country === "";

    if (overLimit) {
        content = <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length === 1) {
        content = <CountryDetail country={filteredCountries[0]} />;
    } else if (filteredCountries.length > 1) {
        content = (
            <ul>
                {filteredCountries.map((x) => (
                    <li key={x.name.official}>{x.name.official}</li>
                ))}
            </ul>
        );
    }

    return <div>{content}</div>;
}

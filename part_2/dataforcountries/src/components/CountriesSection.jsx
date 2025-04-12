import CountryDetail from "./CountryDetail";

export default function CountriesSection({
    country,
    filteredCountries,
    showHandler,
    selectedCountry,
}) {
    const overLimit = filteredCountries.length > 10;

    let content;
    if (overLimit) {
        content = <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length === 1) {
        content = <CountryDetail country={filteredCountries[0]} />;
    } else if (selectedCountry) {
        content = <CountryDetail country={selectedCountry} />;
    } else if (filteredCountries.length > 1) {
        content = (
            <ul>
                {filteredCountries.map((x) => (
                    <div key={x.name.official}>
                        <li>
                            {x.name.official}{" "}
                            <button
                                style={{ diplay: "inline" }}
                                onClick={() => showHandler(x.name.official)}
                            >
                                Show
                            </button>
                        </li>
                    </div>
                ))}
            </ul>
        );
    }

    return <div>{content}</div>;
}

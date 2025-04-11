export default function CountryDetail({ country }) {
    return (
        <>
            <h1>
                {country.name.common} ({country.name.official})
            </h1>

            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>

            <h2>Languages</h2>
            <ul>
                {Object.entries(country.languages).map((l) => (
                    <li key={l[0]}>{l[1]}</li>
                ))}
            </ul>
            <img src={country.flags.png}></img>
        </>
    );
}

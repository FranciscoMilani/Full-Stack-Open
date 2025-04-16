import WeatherDetail from "./WeatherDetail";

export default function CountryDetail({ country }) {
    return (
        <>
            <div>
                <h1>
                    {country.name.common} ({country.name.official})
                </h1>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
            </div>

            <div>
                <h2>Languages</h2>
                <ul>
                    {Object.entries(country.languages).map((l) => (
                        <li key={l[0]}>{l[1]}</li>
                    ))}
                </ul>
            </div>

            <div>
                <img src={country.flags.png}></img>
            </div>

            <div>
                <h2>Weather in {country.capital[0]}</h2>
                <WeatherDetail country={country} />
            </div>
        </>
    );
}

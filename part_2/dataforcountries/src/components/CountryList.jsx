export default function CountryList({ filteredCountries, showHandler }) {
    return (
        <ul>
            {filteredCountries.map((x) => (
                <div key={x.name.official}>
                    <li>
                        {x.name.official} &nbsp;
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

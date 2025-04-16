export default function SearchFilter({ country, typingHandler }) {
    return (
        <div>
            <p style={{ display: "inline" }}>
                Find countries (by official name) &nbsp;
            </p>

            <input type="text" value={country} onChange={typingHandler}></input>
        </div>
    );
}

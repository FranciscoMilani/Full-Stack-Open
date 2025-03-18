import { useState } from "react";

const Button = (props) => (
    <button type="button" onClick={props.onClick}>
        {props.text}
    </button>
);

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const setGoodHandler = () => {
        setGood(good + 1);
    };

    const setNeutralHandler = () => {
        setNeutral(neutral + 1);
    };

    const setBadHandler = () => {
        setBad(bad + 1);
    };

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={setGoodHandler} text="Good" />
            <Button onClick={setNeutralHandler} text="Neutral" />
            <Button onClick={setBadHandler} text="Bad" />

            <h1>Statistics</h1>
            <div>
                <p>Good {good}</p>
                <p>Neutral {neutral}</p>
                <p>Bad {bad}</p>
            </div>
        </div>
    );
};

export default App;

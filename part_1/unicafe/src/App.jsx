import { useState } from "react";

const Button = (props) => (
    <button type="button" onClick={props.onClick}>
        {props.text}
    </button>
);

const Statistics = (props) => {
    return (
        <p>
            {props.label} {props.value}
        </p>
    );
};

const App = () => {
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

    const all = good + neutral + bad;
    const normalizedCount = Math.max(all, 1);
    const avg = (good + bad * -1) / normalizedCount;
    const positive = (good / normalizedCount) * 100;

    return (
        <div>
            <h1>Give Feedback</h1>
            <div>
                <Button onClick={setGoodHandler} text="Good" />
                <Button onClick={setNeutralHandler} text="Neutral" />
                <Button onClick={setBadHandler} text="Bad" />
            </div>

            <h1>Statistics</h1>
            <div>
                <Statistics label="Good" value={good} />
                <Statistics label="Neutral" value={neutral} />
                <Statistics label="Bad" value={bad} />
            </div>
            <div>
                <Statistics label="All" value={all} />
                <Statistics label="Average" value={avg} />
                <Statistics label="Positive" value={positive + "%"} />
            </div>
        </div>
    );
};

export default App;

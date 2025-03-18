import { useState } from "react";

const Button = (props) => (
    <button type="button" onClick={props.onClick}>
        {props.text}
    </button>
);

const Statistics = ({ model }) => {
    if (model.all === 0) return <p>No feedback given</p>;

    return (
        <>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticLine label="Good" value={model.good} />
                    <StatisticLine label="Neutral" value={model.neutral} />
                    <StatisticLine label="Bad" value={model.bad} />
                </tbody>
                <tfoot>
                    <StatisticLine label="All" value={model.all} />
                    <StatisticLine label="Average" value={model.avg} />
                    <StatisticLine
                        label="Positive"
                        value={model.positive + "%"}
                    />
                </tfoot>
            </table>
        </>
    );
};

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.label}</td>
            <td>{props.value}</td>
        </tr>
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

    const statisticModel = {
        good: good,
        neutral: neutral,
        bad: bad,
        all: all,
        avg: avg.toFixed(2),
        positive: positive.toFixed(2),
    };

    return (
        <div>
            <h1>Give Feedback</h1>
            <div>
                <Button onClick={setGoodHandler} text="Good" />
                <Button onClick={setNeutralHandler} text="Neutral" />
                <Button onClick={setBadHandler} text="Bad" />
            </div>
            <div>
                <Statistics model={statisticModel} />
            </div>
        </div>
    );
};

export default App;

import { useState } from "react";

const Button = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
};

const AnecdoteSection = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>has {props.votes} votes</p>
        </div>
    );
};

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];

    const [selected, setSelected] = useState(0);
    const [score, setScore] = useState(new Array(anecdotes.length).fill(0));

    const nextHandler = () => {
        let rnd;
        do {
            rnd = Math.floor(Math.random() * anecdotes.length);
        } while (rnd === selected);

        setSelected(rnd);
    };

    const voteHandler = () => {
        const tempScore = [...score];
        tempScore[selected] += 1;
        setScore(tempScore);
    };

    let mostVoted = score.reduce(
        (highestIndex, currVotes, currIndex) =>
            currVotes > score[highestIndex] ? currIndex : highestIndex,
        0
    );

    return (
        <>
            <div>
                <div>
                    <Button onClick={voteHandler} text="Vote" />
                    <Button onClick={nextHandler} text="Next anecdote" />
                </div>
                <div>
                    <AnecdoteSection
                        title="Anecdote of the day"
                        description={anecdotes[selected]}
                        votes={score[selected]}
                    />
                </div>
            </div>
            <div>
                <AnecdoteSection
                    title="Anecdote with most votes"
                    description={anecdotes[mostVoted]}
                    votes={score[mostVoted]}
                />
            </div>
        </>
    );
};

export default App;

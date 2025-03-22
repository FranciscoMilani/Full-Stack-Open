import { nanoid } from "nanoid";

const Header = (props) => <h1>{props.course}</h1>;

const Course = (props) => {
    const { course } = props;

    return (
        <div>
            <Header course={course.name} />
            <Content courseParts={course.parts} />
        </div>
    );
};

const Content = (props) => {
    const { courseParts } = props;
    const sum = courseParts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
    );

    return (
        <div>
            {courseParts.map((x) => (
                <Part key={x.id} part={x} />
            ))}
            <Total total={sum} />
        </div>
    );
};

const Part = (props) => {
    const { part } = props;
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
};

const Total = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
    const course = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3,
            },
        ],
    };

    return <Course course={course} />;
};

export default App;

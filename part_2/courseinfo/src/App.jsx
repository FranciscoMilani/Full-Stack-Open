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

const Total = (props) => (
    <p style={{ fontWeight: "bold" }}>
        Total of exercises {props.total} exercises
    </p>
);

const App = () => {
    const courses = [
        {
            name: "Half Stack application development",
            id: 1,
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
                {
                    name: "Redux",
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1,
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ];

    return courses.map((x) => <Course course={x} />);
};

export default App;

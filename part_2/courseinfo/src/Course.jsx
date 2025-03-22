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

export default Course;

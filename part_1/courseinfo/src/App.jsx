const Header = ({course}) => {
    return (<h1>{course}</h1>);
}

const Content = ({parts}) => {
    return (
        <div>
            <div>
                <h3>{ parts[0].name }</h3>
                <span>{ parts[0].numOfExercises}</span>
            </div>
            <div>
                <h3>{ parts[1].name }</h3>
                <span>{ parts[1].numOfExercises}</span>
            </div>
            <div>
                <h3>{ parts[2].name }</h3>
                <span>{ parts[2].numOfExercises}</span>
            </div>
        </div>
    )
}

const Total = ({total}) => {
    <div>
        <p>Number of exercises { total }</p>
    </div>
}

const App = () => {
    const course = 'Half Stack application development';
    const parts = [
        { 
            name: 'Fundamentals of React',
            numOfExercises: 10
        },
        { 
            name: 'Using props to pass data',
            numOfExercises: 7
        },
        { 
            name: 'State of a component',
            numOfExercises: 10
        },
    ];
    const totalNumExercises = parts.reduce(x => x.numOfExercises);

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total total={totalNumExercises}/>
        </div>
    )
}

export default App
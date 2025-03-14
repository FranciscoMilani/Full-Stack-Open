const Header = ({course}) => {
    return (<h1>{course}</h1>);
}

const Content = ({parts}) => {
    return (
        <div>
            <Part part={ parts[0] }/>
            <Part part={ parts[1] }/>
            <Part part={ parts[2] }/>
        </div>
    )
}

const Part = ({part}) => {
    return (
        <div>
            <h3>{ part.name }</h3>
            <span>{ part.numOfExercises }</span>
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
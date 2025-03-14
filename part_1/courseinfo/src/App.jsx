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

const Total = ({parts}) => {
    <div>
        <p>Number of exercises { parts.reduce(x => x.numOfExercises) }</p>
    </div>
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
        ],
    }
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts}/>
        </div>
    )
}

export default App
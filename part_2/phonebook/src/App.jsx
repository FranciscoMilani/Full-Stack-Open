import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    const addNumberHandler = (event) => {
        event.preventDefault();

        if (!newName) return;
        if (persons.some((x) => x.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const newNameObj = {
            name: newName,
        };
        setPersons(persons.concat(newNameObj));
        setNewName("");
    };

    const setNewNameHandler = (event) => {
        setNewName(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNumberHandler}>
                <div>
                    name: <input value={newName} onChange={setNewNameHandler} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((x) => (
                <p key={nanoid()}>{x.name}</p>
            ))}
        </div>
    );
};

export default App;

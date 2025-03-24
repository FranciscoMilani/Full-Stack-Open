import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [filter, setFilter] = useState("");
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);

    let filteredPeople = persons.filter((x) =>
        x.name.toLowerCase().includes(filter.toLowerCase())
    );

    const addNumberHandler = (event) => {
        event.preventDefault();

        if (!newName) return;
        if (persons.some((x) => x.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const newNameObj = {
            name: newName,
            number: newPhone,
        };

        setPersons(persons.concat(newNameObj));
        setNewName("");
        setNewPhone("");
    };

    const setNewNameHandler = (event) => {
        setNewName(event.target.value);
    };

    const setNewPhoneHandler = (event) => {
        setNewPhone(event.target.value);
    };

    const setFilterHandler = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <h1>Phonebook</h1>
            <div>
                <label htmlFor="filter">filter shown with: </label>
                <input id="filter" value={filter} onChange={setFilterHandler} />
            </div>
            <h2>add a new</h2>
            <form onSubmit={addNumberHandler}>
                <div>
                    <div>
                        <label htmlFor="name">name: </label>
                        <input
                            id="name"
                            value={newName}
                            onChange={setNewNameHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">phone: </label>
                        <input
                            id="phone"
                            value={newPhone}
                            onChange={setNewPhoneHandler}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {filteredPeople.map((x) => (
                <p key={nanoid()}>
                    {x.name} {x.number}
                </p>
            ))}
        </div>
    );
};

export default App;

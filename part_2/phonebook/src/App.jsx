import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", phone: "040-1234567" },
    ]);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");

    const addNumberHandler = (event) => {
        event.preventDefault();

        if (!newName) return;
        if (persons.some((x) => x.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }

        const newNameObj = {
            name: newName,
            phone: newPhone,
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

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNumberHandler}>
                <div>
                    <div>
                        <label for="name">name: </label>
                        <input
                            id="name"
                            value={newName}
                            onChange={setNewNameHandler}
                        />
                    </div>

                    <div>
                        <label for="phone">phone: </label>
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

            {persons.map((x) => (
                <p key={nanoid()}>
                    {x.name} {x.phone}
                </p>
            ))}
        </div>
    );
};

export default App;

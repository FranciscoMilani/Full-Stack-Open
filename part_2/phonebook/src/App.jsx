import { useState, useEffect } from "react";
import axios from "axios";

import SearchFilter from "./components/SearchFilter";
import PersonAdd from "./components/PersonAdd";
import PersonList from "./components/PersonList";

const App = () => {
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [filter, setFilter] = useState("");
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((response) => {
            setPersons(response.data);
        });
    }, []);

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

        const newPerson = {
            name: newName,
            number: newPhone,
        };

        axios
            .post("http://localhost:3001/persons", newPerson)
            .then((response) => {
                setPersons(persons.concat(response.data));
                setNewName("");
                setNewPhone("");
            });
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

            <SearchFilter filter={filter} handler={setFilterHandler} />

            <h2>Add a new</h2>

            <PersonAdd
                numberHandler={addNumberHandler}
                phoneHandler={setNewPhoneHandler}
                nameHandler={setNewNameHandler}
                newName={newName}
                newPhone={newPhone}
            />

            <h2>Numbers</h2>

            <PersonList filteredPeople={filteredPeople} />
        </div>
    );
};

export default App;

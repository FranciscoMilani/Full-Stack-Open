import { useState, useEffect, useRef } from "react";

import SearchFilter from "./components/SearchFilter";
import PersonAdd from "./components/PersonAdd";
import PersonList from "./components/PersonList";
import phonebook from "./services/phonebook";
import Notification from "./components/Notification";

const App = () => {
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [filter, setFilter] = useState("");
    const [persons, setPersons] = useState([]);
    const [notification, setNotification] = useState(null);

    const nameRef = useRef(null);

    useEffect(() => {
        phonebook.getAll().then((data) => setPersons(data));
    }, []);

    let filteredPeople = persons.filter((x) =>
        x.name?.toLowerCase().includes(filter.toLowerCase())
    );

    const addNumberHandler = (event) => {
        event.preventDefault();

        if (!newName) return;

        const newEntry = {
            name: newName,
            number: newPhone,
        };

        const existingName = persons.find((x) => x.name === newName);
        if (existingName) {
            if (
                window.confirm(
                    `${newName} is already added to phonebook, replace the old number with a new one?`
                )
            ) {
                phonebook
                    .update(existingName.id, newEntry)
                    .then((updatedPerson) => {
                        const existingIndex = persons.findIndex(
                            (x) => x.id === existingName.id
                        );

                        const newPersonList = persons.map((person, index) =>
                            index === existingIndex ? updatedPerson : person
                        );

                        setPersons(newPersonList);

                        updateNotification(
                            `${updatedPerson.name}'s number was updated to ${updatedPerson.number}!`
                        );
                    })
                    .catch(() => {
                        const newPersonList = persons.filter(
                            (x) => existingName.id !== x.id
                        );

                        setPersons(newPersonList);

                        updateNotification(
                            `The information of ${existingName.name} was already deleted from the server`,
                            true
                        );
                    });
            }
        } else {
            phonebook.create(newEntry).then((data) => {
                setPersons(persons.concat(data));
                updateNotification(`Person ${newEntry.name} was created!`);
            });
        }

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

    const deleteEntryHandler = (id, name) => {
        if (window.confirm(`Delete ${name}`)) {
            phonebook.deleteEntity(id);
            setPersons(persons.filter((x) => x.id != id));
            nameRef.current.focus();
        }
    };

    const updateNotification = (message, isError = false) => {
        setNotification({ message, isError });

        setTimeout(() => {
            setNotification(null);
        }, 4000);
    };

    return (
        <div>
            <h1>Phonebook</h1>

            <Notification notification={notification} />

            <SearchFilter filter={filter} handler={setFilterHandler} />

            <h2>Add a new</h2>

            <PersonAdd
                numberHandler={addNumberHandler}
                phoneHandler={setNewPhoneHandler}
                nameHandler={setNewNameHandler}
                newName={newName}
                newPhone={newPhone}
                nameRef={nameRef}
            />

            <h2>Numbers</h2>

            <PersonList
                filteredPeople={filteredPeople}
                deleteHandler={deleteEntryHandler}
            />
        </div>
    );
};

export default App;

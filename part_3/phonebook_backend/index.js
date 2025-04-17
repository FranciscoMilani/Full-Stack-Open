const express = require("express");
const app = express();

app.use(express.json());

persons = [
    {
        id: "1",
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: "2",
        name: "Ada Lovelace",
        number: "39-44-5323523",
    },
    {
        id: "3",
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {
        id: "4",
        name: "Mary Poppendieck",
        number: "39-23-6423122",
    },
];

app.get("/", (request, response) => {
    response.end();
});

app.get("/info", (request, response) => {
    const bookLength = persons.length;
    const utcDate = new Date();

    const html = `
		<p>Phonebook has info for ${bookLength} people</p>
		<p>${utcDate}</p>
	`;

    response.send(html);
});

// --- API REQUESTS ---
app.get("/api/persons", (request, response) => {
    response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
    const id = request.params.id;
    const person = persons.find((x) => x.id === id);

    person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id;
    persons = persons.filter((x) => x.id !== id);

    response.status(204).end();
});

const PORT = 3001;
app.listen(PORT);

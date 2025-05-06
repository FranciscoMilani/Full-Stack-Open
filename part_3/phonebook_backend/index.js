const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(requestLogger);

function requestLogger(request, response, next) {
    if (request.method === "POST") {
        console.log(JSON.stringify(request.body));
    }

    next();
}

let persons = [{
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
}, {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
}, {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
}, {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
}];

function generateId() {
    return Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
}

app.get("/", (request, response) => {
    response.end();
});

app.get("/info", (request, response) => {
    const bookLength = persons.length;
    const utcDate = new Date();

    const html = `
		<p>Phonebook has info for ${bookLength} people</p>
		</br>
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
    const person = persons.find(x => x.id === id);

    person ? response.json(person) : response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id;
    persons = persons.filter(x => x.id !== id);

    response.status(204).end();
});

app.post("/api/persons", (request, response) => {
    const body = request.body;

    if (!body.name || !body.number) {
        return response
            .status(400)
            .json({ error: "person's name and number must not be null" });
    }

    const existingWithName = persons.find(x => x.name === body.name);
    if (existingWithName) {
        return response.status(400).json({ error: "name must be unique" });
    }

    const person = {
        id: String(generateId()),
        name: body.name,
        number: body.number,
    };

    persons = persons.concat(person);
    response.json(person);
});

const PORT = 3001;
app.listen(PORT);

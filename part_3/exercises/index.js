/* Node sem Express
const http = require("http"); // import http from 'http' é a mesma coisa, e a versão comentada é mais moderna (ES6 Modules)

const app = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(notes));
});
*/

const express = require("express");
const app = express();

app.use(express.json()); // converte dados JSON e passa para o objeto Request antes do manipulador da rota ser chamado
app.use(express.static("dist"));

let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true,
    },
    {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false,
    },
    {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true,
    },
];

app.get("/", (request, response) => {
    response.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
    response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
    const id = request.params.id;
    const note = notes.find((x) => x.id === id);

    if (!note) {
        response.status(404).send("Not found");
        return;
    }

    response.json(note);
});

app.delete("/api/notes/:id", (req, res) => {
    notes = notes.filter((x) => x.id !== req.params.id);
    res.status(204).end();
});

const generateId = () => {
    const maxId =
        notes.length > 0 ? Math.max(...notes.map((x) => Number(x.id))) : 0;

    return String(maxId + 1);
};

app.post("/api/notes", (req, res) => {
    const body = req.body;

    if (!body.content) {
        return res.status(400).json({
            error: "content missing",
        });
    }

    const note = {
        id: generateId(),
        content: body.content,
        important: body.important || false,
    };

    notes = notes.concat(note);

    res.json(note);
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
}

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

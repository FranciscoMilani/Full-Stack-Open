const process = require("node:process");
const mongoose = require("mongoose");

if (process.argv.length < 3) {
    console.log("Insert [password] as parameter to retrieve all, or [password] [person name] [phonenumber] as parameters to save person to phonebook");
    process.exit(1);
}

const password = process.argv[2];
const personName = process.argv[3];
const personPhone = process.argv[4];

mongoose.connect(`mongodb+srv://franciscofmilani:${password}@cluster0.sllslbr.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`);

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: personName,
    number: personPhone,
});

if (process.argv.length === 3) {
    Person.find({}).then((result) => {
        result.forEach((person) => { console.log(`${person.name} ${person.number}`); });
        mongoose.connection.close();
    });
}
else if (process.argv.length === 5) {
    person.save().then((result) => {
        console.log(`added "${result.name}" number ${result.number} to phonebook`);
        mongoose.connection.close();
    });
}

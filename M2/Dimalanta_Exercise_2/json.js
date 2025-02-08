const person = {
    name: "Benedict Solo P. Dimalanta",
    age: 20,
    hobbies: ["basketball", "cycling", "gaming", "coding"]
};

document.body.innerHTML += `<h2>Name: ${person.name}</h2>`;
document.body.innerHTML += `<h2>Age: ${person.age}</h2>`;
document.body.innerHTML += `<h2>Hobbies: ${person.hobbies.join(", ")}</h2>`;
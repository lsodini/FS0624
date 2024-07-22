class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    compareAge(otherUser) {
        if (this.age > otherUser.age) {
            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
        } else if (this.age < otherUser.age) {
            return `${this.firstName} è più giovane di ${otherUser.firstName}`;
        } else {
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
        }
    }
}

// Creazione di oggetti User
const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luca", "Bianchi", 25, "Milano");

// Verifica della comparazione delle età
console.log(user1.compareAge(user2)); // Output: "Mario è più vecchio di Luca"
console.log(user2.compareAge(user1)); // Output: "Luca è più giovane di Mario"
console.log(user1.compareAge(user1)); // Output: "Mario e Mario hanno la stessa età"

/////////pet/////////
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const petForm = document.getElementById('petForm');
const petList = document.getElementById('petList');
const pets = [];

petForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);

    displayPets();
});

function displayPets() {
    petList.innerHTML = '';

    pets.forEach(pet => {
        const petItem = document.createElement('li');
        petItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        petList.appendChild(petItem);
    });
}

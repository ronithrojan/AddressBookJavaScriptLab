class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

let myBook = new AddressBook();
myBook.add("Roniya Rojan", "roniyarojan24@gmail.com", "234.379.3890", "Me");
myBook.add("Alyssa C", "alyssa50@gmail.com", "234.999.6666", "Friend");
myBook.add("Riya Rojan", "riya60@gmail.com", "284.389.9890", "Me");
myBook.add("Kobe Bryant", "Kobes888@gmail.com", "555.555.5555", "Friend");
myBook.add("James Lebron", "James999@gmail.com", "666.666.6666", "Friend");
console.log(myBook);
// myBook.deleteAt();

const print = function(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
  });
};

print(myBook);

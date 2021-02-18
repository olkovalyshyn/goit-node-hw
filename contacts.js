const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err) throw err;
    return data;
  });
  //   try {
  //     const listAllContacts = fs.readFile;
  //   } catch (error) {
  //     console.log(error);
  //   }
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = { listContacts };

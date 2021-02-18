const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

function listContacts() {
  try {
    fs.readFile(contactsPath, "utf-8").then((data) => {
      console.table(JSON.parse(data));
    });
  } catch (error) {
    console.log(error);
  }
}

function getContactById(contactId) {
  try {
    fs.readFile(contactsPath, "utf-8").then((data) => {
      console.table(
        JSON.parse(data).find((contact) => contact.id === contactId)
      );
    });
  } catch (error) {
    console.log(error);
  }
}

function removeContact(contactId) {
  try {
    fs.readFile(contactsPath, "utf-8").then((data) => {
      const ListContactsWihtoutRemove = JSON.parse(data).filter(
        (contact) => contact.id !== contactId
      );
      fs.writeFile(contactsPath, JSON.stringify(ListContactsWihtoutRemove));
    });
  } catch (error) {
    console.log(error);
  }
}

function addContact(name, email, phone) {
  try {
    fs.readFile(contactsPath, "utf-8").then((data) => {
      const parsedData = JSON.parse(data);

      const newContact = {
        id: shortid.generate(),
        name,
        email,
        phone,
      };

      const newBase = [...parsedData, newContact];

      fs.writeFile(contactsPath, JSON.stringify(newBase), "utf-8");

      console.table(newBase);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };

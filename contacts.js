const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
// function listContacts() {
//   fs.readFile(contactsPath, (error, data) => {
//     if (error) throw error;
//     console.table(JSON.parse(data));
//   });
// }
function listContacts() {
  try {
    fs.readFile(contactsPath, "utf-8").then((data) => {
      console.table(JSON.parse(data));
    });
  } catch (error) {
    console.log(error);
  }
}

// function getContactById(contactId) {
//   fs.readFile(contactsPath, (error, data) => {
//     if (error) throw error;
//     const listAllContacts = JSON.parse(data);

//     listAllContacts.find((contact) => {
//       if (contact.id === contactId) {
//         console.log("Contact by Id: ", contact);
//       }
//     });
//   });
// }
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

// function removeContact(contactId) {
//   // fs.readFile(contactsPath, (error, data) => {
//   //   if (error) throw error;
//   //   const listAllContacts = JSON.parse(data);

//   //   const ListContactsWihtRemove = listAllContacts.filter((contact) => {
//   //     if (contact.id !== contactId) {
//   //       console.table(contact);
//   //     }
//   //   });
//   // });

//   fs.readFile(contactsPath, "utf-8", (error, data) => {
//     if (error) throw error;
//     const listAllContacts = JSON.parse(data);

//     const ListContactsAfterRemove = listAllContacts.filter((contact) => {
//       contact.id !== contactId;
//     });

//     // const newContacts = fs.writeFile(
//     //   contactsPath,
//     //   JSON.stringify(ListContactsAfterRemove, null, 2),
//     //   "utf-8",
//     //   (error) => {
//     //     if (error) throw error;
//     //   }
//     // );

//     console.table(ListContactsAfterRemove);

//     // fs.readFile(contactsPath, (error, data) => {
//     //   if (error) throw error;
//     //   console.log("!!!HERE MUST BE A DATA");
//     //   console.table(data);
//     // });
//   });
// }
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
      console.table(newBase);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './App.css';
import AddNewContact from './components/AddNewContact';
import DisplayContacts from './components/DisplayContacts';
import SearchContact from './components/SearchField';
import contactService from './services/contacts';

export interface Contact {
  id?: number;
  name: string;
  number: string;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [keyword, setKeyword] = useState('');
  const [currentContactsLength, setCurrentContactsLength] = useState(
    contacts.length,
  );
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    contactService
      .getAll()
      .then((initialContacts) => setContacts(initialContacts));
  }, []);

  function handleChangeName(e: ChangeEvent<HTMLInputElement>): void {
    setNewName(e.currentTarget.value);
  }

  function handleChangeNumber(e: ChangeEvent<HTMLInputElement>): void {
    setNewNumber(e.currentTarget.value);
  }

  function handleSubmitForm(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const existingContact = contacts.find((p) => p.name === newName);
    if (existingContact) {
      if (existingContact.number === newNumber) {
        alert(`${newName} is already added to phone book`);
        return;
      } else {
        const existingContact = contacts.find((p) => p.name === newName);
        const shouldReplace = window.confirm(
          `${newName} has a different number now. Update the number ${existingContact.number} with ${newNumber}?`,
        );
        if (!shouldReplace) return;
        updateContact(existingContact.id, {
          ...existingContact,
          number: newNumber,
        });
        return;
      }
    }
    createContact({ name: newName, number: newNumber });
    resetForm;
  }

  function updateContact(id: number, updatedContact: Contact) {
    contactService.update(id, updatedContact).then((returnedContact) => {
      setContacts(
        contacts.map((c) =>
          c.id !== returnedContact.id ? c : returnedContact,
        ),
      );
      setNotification(
        `${returnedContact.name} is updated in the contact list.`,
      );
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    });
  }

  function createContact(contact: Contact) {
    contactService.create(contact).then((returnedContact) => {
      setContacts([
        ...contacts,
        {
          id: returnedContact.id,
          name: returnedContact.name,
          number: returnedContact.number,
        },
      ]);
      setNotification(`${returnedContact.name} is added to the contact list.`);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    });
  }

  function resetForm() {
    setNewName('');
    setNewNumber('');
  }

  function handleTypingInSearchField(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  function handleContactDeleted(id: number): void {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id),
    );
  }

  return (
    <div>
      <h2>Phone Book</h2>
      <SearchContact
        keyword={keyword}
        onTypingInSearchField={handleTypingInSearchField}
      />
      <h2>Add a new one</h2>
      <AddNewContact
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handleSubmitForm={handleSubmitForm}
        name={newName}
        number={newNumber}
      />
      {notification && <p className="Notification">{notification}</p>}
      {true && <p className="Notification">Notification</p>}
      <h2>Showing {currentContactsLength} Numbers</h2>
      <DisplayContacts
        contacts={contacts}
        keyword={keyword}
        onContactDeleted={handleContactDeleted}
        setCurrentLength={setCurrentContactsLength}
      />
    </div>
  );
}

export default App;

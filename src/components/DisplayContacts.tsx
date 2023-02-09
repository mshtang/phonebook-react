import React, { useEffect } from 'react';
import { Contact } from '../App';
import ContactDetail from './ContactDetail';

interface DisplayContactsProps {
  contacts: Contact[];
  keyword: string;
  onContactDeleted: (id: number) => void;
  setCurrentLength: (val: number) => void;
}

const DisplayContacts: React.FC<DisplayContactsProps> = ({
  contacts,
  keyword,
  onContactDeleted,
  setCurrentLength,
}) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase()),
  );

  useEffect(() => {
    setCurrentLength(filteredContacts.length);
  });

  return (
    <div>
      {filteredContacts.map((contact) => (
        <ContactDetail
          key={contact.name}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onContactDeleted={onContactDeleted}
        />
      ))}
    </div>
  );
};

export default DisplayContacts;

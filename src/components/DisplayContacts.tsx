import React, { useEffect } from 'react';
import { Contact } from '../App';
import ContactDetail from './ContactDetail';

interface DisplayContactsProps {
  contacts: Contact[];
  keyword: string;
  onContactDeleted: (id: number) => void;
  onContactDeletedError: (error: string) => void;
  setCurrentLength: (val: number) => void;
}

const DisplayContacts: React.FC<DisplayContactsProps> = ({
  contacts,
  keyword,
  onContactDeleted,
  onContactDeletedError,
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
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onContactDeleted={onContactDeleted}
          onContactDeletedError={onContactDeletedError}
        />
      ))}
    </div>
  );
};

export default DisplayContacts;

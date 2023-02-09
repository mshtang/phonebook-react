import React from 'react';
import ContactDetail from './ContactDetail';

interface Contact {
  name: string;
  number: string;
}

interface DisplayNumbersProps {
  contacts: Contact[];
  keyword: string;
}

const DisplayContacts: React.FC<DisplayNumbersProps> = ({
  contacts,
  keyword,
}) => {
  return (
    <div>
      {contacts
        .filter((contact) =>
          contact.name
            .toLocaleLowerCase()
            .startsWith(keyword.toLocaleLowerCase()),
        )
        .map((contact) => (
          <ContactDetail
            key={contact.name}
            name={contact.name}
            number={contact.number}
          />
        ))}
    </div>
  );
};

export default DisplayContacts;

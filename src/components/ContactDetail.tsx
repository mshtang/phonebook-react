import React from 'react';

interface ContactDetailProps {
  name: string;
  number: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ name, number }) => {
  return (
    <div>
      {name}: {number}
    </div>
  );
};

export default ContactDetail;

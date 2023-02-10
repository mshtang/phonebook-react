import { AxiosError } from 'axios';
import React, { useState } from 'react';
import contactService from '../services/contacts';

interface ContactDetailProps {
  id?: number;
  name: string;
  number: string;
  onContactDeleted: (id: number) => void;
  onContactDeletedError: (error: string) => void;
}

const ContactDetail: React.FC<ContactDetailProps> = ({
  id,
  name,
  number,
  onContactDeleted,
  onContactDeletedError,
}) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [borderStyle, setBorderStyle] = useState({
    display: 'flex',
    alignItems: 'center',
    border: '',
    padding: '5px',
    margin: '5px',
  });

  function deleteContact(): void {
    if (window.confirm(`Delete ${name}?`)) {
      contactService
        .deleteContact(id)
        .then(() => {
          onContactDeleted(id);
        })
        .catch((error: Error | AxiosError) => {
          onContactDeletedError(error.message);
        });
    }
  }

  return (
    <div
      style={borderStyle}
      onMouseEnter={() => {
        setShowDeleteButton(true);
        setBorderStyle({ ...borderStyle, border: '1px solid #112233' });
      }}
      onMouseLeave={() => {
        setShowDeleteButton(false);
        setBorderStyle({ ...borderStyle, border: '' });
      }}
    >
      <div style={{ flex: '5' }}>
        {name}: {number}{' '}
      </div>
      {showDeleteButton && (
        <button
          style={{ flex: '1' }}
          className="MdButton"
          onClick={deleteContact}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ContactDetail;

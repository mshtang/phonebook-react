import React, { ChangeEvent, FormEvent } from 'react';

interface AddNewContactProps {
  name: string;
  number: string;
  handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeNumber: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
}

const AddNewContact: React.FC<AddNewContactProps> = ({
  name,
  number,
  handleChangeName,
  handleChangeNumber,
  handleSubmitForm,
}) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'flex-end',
        }}
      >
        <div>
          name:{' '}
          <input
            name="newName"
            onChange={handleChangeName}
            value={name}
            className="MdInput"
          />
        </div>
        <div>
          number:{' '}
          <input
            className="MdInput"
            name="newNumber"
            onChange={handleChangeNumber}
            value={number}
          />
        </div>
        <div>
          <button className="MdButton" type="submit">
            add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddNewContact;

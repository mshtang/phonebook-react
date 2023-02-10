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
    <form
      onSubmit={handleSubmitForm}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <input
        style={{ flexGrow: '2' }}
        type="text"
        placeholder="Name"
        name="newName"
        onChange={handleChangeName}
        value={name}
        className="MdInput"
      />
      <input
        style={{ flexGrow: '3' }}
        type="text"
        placeholder="Number"
        className="MdInput"
        name="newNumber"
        onChange={handleChangeNumber}
        value={number}
      />
      <button className="MdButton" type="submit" style={{ flexGrow: '1' }}>
        Add
      </button>
    </form>
  );
};

export default AddNewContact;

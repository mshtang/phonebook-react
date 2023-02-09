import React, { ChangeEvent } from 'react';

interface SearchContactProps {
  keyword: string;
  onTypingInSearchField: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchContact: React.FC<SearchContactProps> = ({
  keyword,
  onTypingInSearchField,
}) => {
  return (
    <div>
      <label htmlFor="searchField">Filter shown with: </label>
      <input
        name="searchField"
        value={keyword}
        className="MdInput"
        onChange={onTypingInSearchField}
      />
    </div>
  );
};

export default SearchContact;

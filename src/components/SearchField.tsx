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
      <input
        placeholder="Filter shown with"
        name="searchField"
        value={keyword}
        className="MdInput"
        onChange={onTypingInSearchField}
      />
    </div>
  );
};

export default SearchContact;

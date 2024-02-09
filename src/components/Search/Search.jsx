import React from 'react';

const Search = ({ onSearchChange, onSortChange }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-10 mx-10">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={onSearchChange}
        className="w-full md:w-auto px-4 py-2 mb-2 md:mb-0 md:mr-4 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
      />

      <select
        onChange={onSortChange}
        className="w-full md:w-auto px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-400"
      >
        <option value="">Sort by...</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="company">Company</option>
      </select>
    </div>
  );
};

export default Search;

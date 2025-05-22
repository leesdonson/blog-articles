"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center relative">
      <input
        className="p-2 w-full border outline-none focus:border-blue-500 border-slate-300 rounded-sm"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        type="submit"
        className="p-0 bg-transparent absolute top-0 right-1 hover:bg-transparent flex items-center justify-center"
      >
        <Search className="text-slate-500 font-bold" />
      </Button>
    </form>
  );
};

export default SearchInput;

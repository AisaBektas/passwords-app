import { useEffect, useState } from "react";
import CloseIcon from "./CloseIcon";
import SearchIcon from "./SearchIcon";
import useDebounce from "../core/hooks/useDebounce";
import { useAllPasswords } from "../modules/home/hooks/useAllPasswords";

type SearchProps = {
  handleSearch: (term: string) => void;
};

const Search = ({ handleSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setCurrentPage } = useAllPasswords();

  const debouncedSearchValue = useDebounce(searchTerm, 1000);

  useEffect(() => {
    handleSearch(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <form className="w-full sm:w-[400px]" onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center space-between p-2 rounded-md border-2 border-gray-200">
        <SearchIcon color="#ccc" />
        <input
          type="text"
          placeholder="Pretraži..."
          className="bg-white w-full focus:outline-none rounded-md border-none ml-2 text-lg font-normal placeholder:text-gray-300 text-gray-900"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm("")} type="button">
            <CloseIcon
              color="#ccc"
              className="cursor-pointer hover:stroke-gray-900"
            />
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;

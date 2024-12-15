import { createContext } from "react";
import { IPassword } from "../../../core/interfaces/password.interface";

interface IAllPasswordsContextProps {
  allPasswords: IPassword[];
  setAllPasswords: (passwords: IPassword[]) => void;
  loading: boolean;
  error: string | null;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  fetchAllPasswords: () => Promise<void>;
  searchPasswords: (searchTerm: string, selectedColumns: string[]) => void;
}

export const AllPasswordsContext = createContext<IAllPasswordsContextProps>({
  allPasswords: [],
  setAllPasswords: () => {},
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
  setCurrentPage: () => {},
  handleNextPage: () => {},
  handlePreviousPage: () => {},
  fetchAllPasswords: async () => {},
  searchPasswords: () => {},
});

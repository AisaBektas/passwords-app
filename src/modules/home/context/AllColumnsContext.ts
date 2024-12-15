import { createContext } from "react";

interface IAllColumnsContextProps {
  allColumns: string[];
  selectedColumns: string[];
  columnsForSelection: string[];
  loading: boolean;
  error: string | null;
  fetchAllColumns: () => Promise<void>;
  toggleColumnSelection: (column: string) => void;
}

export const AllColumnsContext = createContext<IAllColumnsContextProps>({
  allColumns: [],
  selectedColumns: [],
  columnsForSelection: [],
  loading: false,
  error: null,
  fetchAllColumns: async () => {},
  toggleColumnSelection: () => {},
});

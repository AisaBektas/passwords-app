import { AxiosResponse } from "axios";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { apiService } from "../../../core/api/services/apiService";
import { AllColumnsContext } from "../context/AllColumnsContext";

export const AllColumnsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [allColumns, setAllColumns] = useState<string[]>([]);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [columnsForSelection, setColumnsForSelection] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllColumns = async () => {
    setLoading(true);
    setError(null);
    try {
      const response: AxiosResponse<string[]> = await apiService.get("kolone");

      if (response) {
        setAllColumns(response.data);
        setSelectedColumns(response.data.slice(0, 5));
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (error) {
      console.error("Error fetching all columns:", error);
      setError("Failed to fetch all columns");
    } finally {
      setLoading(false);
    }
  };

  // Update columnsForSelection whenever selectedColumns changes
  useEffect(() => {
    const availableColumns = allColumns.filter(
      (column) => !selectedColumns.includes(column)
    );
    setColumnsForSelection(availableColumns);
  }, [selectedColumns, allColumns]);

  const toggleColumnSelection = (column: string) => {
    setSelectedColumns((prevSelected) => {
      if (prevSelected.includes(column)) {
        // If column is already selected, remove it
        return prevSelected.filter((item) => item !== column);
      } else {
        // Otherwise, add it to selected columns
        return [...prevSelected, column];
      }
    });
  };

  useEffect(() => {
    fetchAllColumns();
  }, []);

  return (
    <AllColumnsContext.Provider
      value={{
        allColumns,
        selectedColumns,
        columnsForSelection,
        loading,
        error,
        fetchAllColumns,
        toggleColumnSelection,
      }}
    >
      {children}
    </AllColumnsContext.Provider>
  );
};

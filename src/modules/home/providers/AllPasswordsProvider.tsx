import { AxiosResponse } from "axios";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { IPassword } from "../../../core/interfaces/password.interface";
import { apiService } from "../../../core/api/services/apiService";
import { AllPasswordsContext } from "../context/AllPasswordsContext";

export const AllPasswordsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [allPasswords, setAllPasswords] = useState<IPassword[]>([]);
  const [originalPasswords, setOriginalPasswords] = useState<IPassword[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1); // Track current page
  const itemsPerPage = 15; // 15 items per page

  const fetchAllPasswords = async () => {
    setLoading(true);
    setError(null);
    try {
      const response: AxiosResponse<IPassword[]> = await apiService.get(
        "sifre"
      );

      if (response) {
        setAllPasswords(response.data);
        setOriginalPasswords(response.data);
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (error) {
      console.error("Error fetching all passwords:", error);
      setError("Failed to fetch all passwords");
    } finally {
      setLoading(false);
    }
  };

  const searchPasswords = (searchTerm: string, selectedColumns: string[]) => {
    if (searchTerm.length < 3) {
      setAllPasswords(originalPasswords);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    const filteredPasswords = originalPasswords.filter((password) =>
      selectedColumns.some((column) => {
        const columnValue = password[column as keyof IPassword];
        return (
          typeof columnValue === "string" &&
          columnValue.toLowerCase().includes(searchLower)
        );
      })
    );

    setAllPasswords(filteredPasswords);
  };
  const handleNextPage = () => {
    if (currentPage * itemsPerPage < allPasswords.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allPasswords.slice(startIndex, endIndex);
  };

  useEffect(() => {
    fetchAllPasswords();
  }, []);

  return (
    <AllPasswordsContext.Provider
      value={{
        allPasswords: getPaginatedData(),
        setAllPasswords,
        loading,
        error,
        fetchAllPasswords,
        searchPasswords,
        currentPage,
        setCurrentPage,
        handleNextPage,
        handlePreviousPage,
        totalPages: Math.ceil(allPasswords.length / itemsPerPage),
      }}
    >
      {children}
    </AllPasswordsContext.Provider>
  );
};

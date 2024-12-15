import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Table from "../../../components/Table";
import MenuIcon from "../../../components/MenuIcon";
import Search from "../../../components/Search";
import { useAllPasswords } from "../hooks/useAllPasswords";
import { useAllColumns } from "../hooks/useAllColumns";
import TablePagination from "../../../components/TablePagination";
import MobileSidebar from "../../../components/MobileSidebar";

const HomePage = () => {
  const {
    allPasswords,
    searchPasswords,
    currentPage,
    totalPages,
    handleNextPage,
    handlePreviousPage,
  } = useAllPasswords();
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const { selectedColumns } = useAllColumns();

  return (
    <div className="flex min-h-screen relative">
      <div className="bg-white w-full lg:w-5/6">
        <div className="h-[10vh] pb-5 w-full flex flex-col sm:flex-row  sm:justify-between lg:justify-end sm:items-center p-2">
          <button
            className="block lg:hidden mb-2 sm:mb-0"
            onClick={() => setMobileSidebar(true)}
          >
            <MenuIcon />
          </button>

          <Search
            handleSearch={(term) => searchPasswords(term, selectedColumns)}
          />
        </div>
        <div className="relative max-h-[90vh] p-2 lg:p-0">
          <Table columnTitles={selectedColumns} tableData={allPasswords} />
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      </div>
      <Sidebar />
      {mobileSidebar && (
        <div
          className="fixed z-50 bg-black/[0.5] h-screen w-full"
          onClick={() => setMobileSidebar(false)}
        >
          <MobileSidebar />
        </div>
      )}
    </div>
  );
};

export default HomePage;

import NextIcon from "./NextIcon";
import PreviousIcon from "./PreviousIcon";

type TablePaginationProps = {
  currentPage: number;
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
};

const TablePagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}: TablePaginationProps) => {
  return (
    <div className="w-full p-2 flex justify-end border-r-2 border-t-2">
      <div className="flex space-x-2 items-center">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="disabled:opacity-25"
        >
          <PreviousIcon className="hover:stroke-gray-900  stroke-gray-500" />
        </button>
        <p className="text-sm px-4">
          {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          className="disabled:opacity-25"
          disabled={currentPage === totalPages}
        >
          <NextIcon className="hover:stroke-gray-900  stroke-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;

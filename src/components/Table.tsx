import { IPassword } from "../core/interfaces/password.interface";

type TableProps = {
  columnTitles: string[];
  tableData: IPassword[];
};
const Table = ({ columnTitles, tableData }: TableProps) => {
  return (
    <div className="overflow-x-auto w-full max-h-[90vh]">
      <table className="w-full text-left min-w-max">
        <thead className="sticky top-0 p-2 border-b-2 border-gray-200 bg-white z-10">
          <tr>
            {columnTitles.map((column: string, key: number) => (
              <th key={key} className="p-2 border-r-2 border-gray-200">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="overflow-y-auto max-h-[90vh]">
          {tableData.map((password: IPassword, key: number) => (
            <tr
              key={key}
              className={key % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              {columnTitles.map((column: string, key: number) => (
                <td key={key} className="p-2 border-r-2 border-gray-200">
                  {password[column as keyof IPassword]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

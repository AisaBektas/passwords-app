import { useAllColumns } from "../modules/home/hooks/useAllColumns";
import List from "./List";

const Sidebar = () => {
  const { toggleColumnSelection, selectedColumns, columnsForSelection } =
    useAllColumns();
  return (
    <>
      <div className="hidden lg:w-1/6 lg:flex flex-col bg-gray-100">
        <List
          items={selectedColumns}
          onItemClick={(item) => {
            toggleColumnSelection(item);
          }}
          itemClassName="border-2 border-red-500"
          listClassName="p-5 h-1/2 overflow-y-auto border-b-2 border-gray-400"
        />
        <List
          items={columnsForSelection}
          onItemClick={(item) => {
            toggleColumnSelection(item);
          }}
          itemClassName="border-2 border-green-500"
          listClassName="p-5 h-1/2 overflow-y-auto"
        />
      </div>
    </>
  );
};

export default Sidebar;

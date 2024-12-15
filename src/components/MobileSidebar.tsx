import { useAllColumns } from "../modules/home/hooks/useAllColumns";
import List from "./List";

const MobileSidebar = () => {
  const { toggleColumnSelection, selectedColumns, columnsForSelection } =
    useAllColumns();
  return (
    <div className="w-full h-full flex justify-end">
      <div
        className="w-64 h-full bg-white z-50 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
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
    </div>
  );
};

export default MobileSidebar;

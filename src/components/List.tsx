type ListProps = {
  items: string[];
  onItemClick: (item: string) => void;
  itemClassName: string;
  listClassName?: string;
};

const List = ({
  items,
  onItemClick,
  itemClassName,
  listClassName,
}: ListProps) => {
  return (
    <ul className={`flex flex-col space-y-2 ${listClassName}`}>
      {items.map((item, key) => (
        <li
          key={key}
          onDoubleClick={() => onItemClick(item)}
          className={`rounded-md p-2 cursor-pointer ${itemClassName}`}
        >
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;

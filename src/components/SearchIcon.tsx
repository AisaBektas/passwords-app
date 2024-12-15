type SearchIconProps = {
  color?: string;
};

const SearchIcon = ({ color = "currentColor" }: SearchIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke={color}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m2.85-6.65a8 8 0 11-16 0 8 8 0 0116 0z"
    />
  </svg>
);

export default SearchIcon;

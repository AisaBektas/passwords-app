type PreviousIconProps = {
  color?: string;
  className?: string;
};
const PreviousIcon = ({
  color = "currentColor",
  className,
}: PreviousIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke={color}
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

export default PreviousIcon;

interface Props {
  label: string;
  isChecked: boolean;
  onCheckboxChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<Props> = ({
  label,
  isChecked,
  onCheckboxChange,
}) => {
  return (
    <button onClick={() => onCheckboxChange(!isChecked)} className="flex gap-4">
      <span className="w-[27px] h-[27px] border-2 border-solid border-primary rounded-lg flex justify-center items-center">
        {isChecked && (
          <svg
            className="w-[60%]"
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="29"
            viewBox="0 0 39 29"
            fill="none"
          >
            <path
              d="M13.638 29L0 15.2536L3.40951 11.817L13.638 22.1268L35.5905 0L39 3.43659L13.638 29Z"
              fill="#009CDD"
            />
          </svg>
        )}
      </span>
      <span className="text-body flex-1 text-left text-[20px]/[23px]">
        {label}
      </span>
    </button>
  );
};

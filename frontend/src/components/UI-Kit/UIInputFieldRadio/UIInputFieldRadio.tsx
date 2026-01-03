interface UIInputFieldRadioProps {
  id: string;
  value: string;
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const UIInputFieldRadio = ({
  value,
  checked,
  name,
  onChange,
  children,
  disabled,
  id,
}: UIInputFieldRadioProps) => {
  return (
    <label htmlFor={id} className="radio-option">
      <input
        type="radio"
        key={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span>{children}</span>
    </label>
  );
};

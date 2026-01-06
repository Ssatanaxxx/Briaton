import { ReactNode } from "react";
import "./UIAuthButton.css";
import { FaRegUser } from "react-icons/fa";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  isLoading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const UIAuthButton = ({
  type = "button",
  title,
  isLoading,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className="header__user-btn"
      type={type}
      disabled={isLoading}
      aria-label={title}
      onClick={onClick}
    >
      {isLoading ? "Загрузка..." : children}
      <FaRegUser />
    </button>
  );
};

export default UIAuthButton;

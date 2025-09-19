import IconUser from "../../assets/sprite/icon-user.svg?react";
import { ReactNode } from "react";
import "./Auth.css"
interface ButtonProps {
    type?: "button" | "submit" | "reset";
    title: string;
    isLoading?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}

const Button = ({ 
    type = "button", 
    title, 
    isLoading, 
    children, 
    onClick 
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
            <IconUser />
        </button>
    );
};

export default Button;
import IconUser from "../../../assets/sprite/icon-user.svg?react"
import { ReactNode } from "react";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    title: string;
    isLoading?: boolean;
    children?: ReactNode;
}

const Button = ({ type = "button", title, isLoading, children }: ButtonProps) => {
    return (
        <button
            className="header__user-btn"
            type={type}
            disabled={isLoading}
            aria-label={title}
        >
            {isLoading ? "Загрузка..." : children}
            <IconUser />
        </button>
    );
};

export default Button;
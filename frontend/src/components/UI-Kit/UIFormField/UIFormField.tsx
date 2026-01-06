import { FC, ReactNode } from "react";
import "./UIFormField.css"

interface IUIFormFieldProps {
    label: string;
    children: ReactNode;
    errorMessage?: string;
    htmlFor?: string;
}

export const UIFormField: FC<IUIFormFieldProps> = ({
    children,
    label,
    errorMessage,
    htmlFor,
}) => {
    return (
        <label htmlFor={htmlFor} className="form-field">
            <span className="form-field__label">{label}</span>
            {children}
            {errorMessage && (
                <span className="form-field__error-text">{errorMessage}</span>
            )}
        </label>
    );
};

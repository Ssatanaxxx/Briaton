import { useState, ReactNode, FC } from "react";
import "./UITooltip.css";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

const UITooltip: FC<TooltipProps> = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {children}
      {isOpen && <div className="tooltip-content">{content}</div>}
    </div>
  );
};


export default UITooltip;
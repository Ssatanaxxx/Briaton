import { useEffect } from "react";

interface UseCloseOnOutsideProps {
  wrapperRef: React.RefObject<HTMLElement>;
  isOpen: boolean;
  onClose: () => void;
}

const useCloseOnOutside = ({
  wrapperRef,
  isOpen,
  onClose,
}: UseCloseOnOutsideProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, wrapperRef, onClose]);
};

export default useCloseOnOutside;

import { useCallback, useEffect, useState } from "react";

export const useBurgerMenu = () => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!isOpening) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return (() => {document.body.style.overflow = "";})
  }, [isOpening]);

  const toggleMenu = useCallback(() => {
    setIsOpening((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpening(false);
  }, []);

  return { isOpening, toggleMenu, closeMenu };
};

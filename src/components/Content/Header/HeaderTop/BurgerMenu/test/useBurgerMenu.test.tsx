import { renderHook, act } from "@testing-library/react-hooks";
import { useBurgerMenu } from "./useBurgerMenu";

describe("useBurgerMenu Hook", () => {
  it("toggles menu state", () => {
    const { result } = renderHook(() => useBurgerMenu());

    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.closeMenu();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("locks body scroll when open", () => {
    const { result } = renderHook(() => useBurgerMenu());

    act(() => {
      result.current.toggleMenu();
    });

    expect(document.body.style.overflow).toBe("hidden");

    act(() => {
      result.current.closeMenu();
    });

    expect(document.body.style.overflow).toBe("");
  });
});

import { MutableRefObject, useEffect, useState } from "react";

interface Props {
  elementRef: MutableRefObject<Array<HTMLElement | null>>;
  containerRef: MutableRefObject<HTMLElement | null>;
}

export function useOffset({ elementRef, containerRef }: Props) {
  const [activeCategory, setActiveCategory] = useState("mariscos");

  const menuCategories = elementRef.current;
  const menuContainer = containerRef.current;
  const menuOffsetTop = menuContainer?.offsetTop ?? 0;

  useEffect(() => {
    const handleScroll = () => {
      menuCategories.forEach((category) => {
        const offset = window.scrollY + menuOffsetTop;

        if (category) {
          const categoryId = category.id;
          const categoryOffset = category.offsetTop;

          if (offset >= categoryOffset) {
            setActiveCategory(categoryId);
          }
        }
      });
    };

    menuCategories.forEach((category) => {
      if (category) {
        const observer = new ResizeObserver(() => {
          const firstCategory = menuCategories.find((category) => category !== null);
          if (firstCategory) {
            setActiveCategory(firstCategory.id);
          }
        });

        observer.observe(menuContainer as Element);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuCategories, menuContainer, menuOffsetTop]);

  return { activeCategory, menuOffsetTop };
}

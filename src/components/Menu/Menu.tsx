import { capitalize, cn } from "@/utils";
import { useFilters, useOffset } from "@/hooks";
import { MenuCategory, MenuEmpty } from "@/components";
import { MouseEvent, useRef } from "react";

function Menu() {
  const { filteredMenu: menu } = useFilters();
  const menuCategories = Array.from(new Set(menu.map(({ category }) => category)));

  const menuRef = useRef<HTMLElement | null>(null);
  const menuCategoriesRefs = useRef<Array<HTMLElement | null>>([]);
  const { activeCategory, menuOffsetTop } = useOffset({
    elementRef: menuCategoriesRefs,
    containerRef: menuRef,
  });

  const handleClick = (index: number, event: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    const category = menuCategoriesRefs.current[index];

    if (category) {
      // Add 32 because of the padding top of the menu container
      window.scrollTo({
        behavior: "smooth",
        top: category.offsetTop - menuOffsetTop + 32,
      });
    }
  };

  return (
    <main className="mb-8">
      <section className="sticky top-[57px] w-full shadow-md bg-background ">
        <nav>
          <ul className="flex justify-start items-center gap-x-8 p-4 overflow-x-auto overflow-y-hidden sm:justify-center">
            {menu
              ? menuCategories.map((category, index) => (
                  <li key={category} className="focus-visible">
                    <a
                      href={`#${category}`}
                      onClick={(event) => handleClick(index, event)}
                      tabIndex={0}
                      className={cn(
                        "px-4 py-1 cursor-pointer font-flame text-lg rounded-full focusVisible",
                        activeCategory === category && "active focus-visible:ring-secondary"
                      )}
                    >
                      {capitalize(category)}
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </nav>
      </section>
      <section ref={menuRef} className="container mt-8">
        {menu.length > 0 ? (
          menuCategories.map((category, index) => (
            <div
              id={category}
              key={category}
              ref={(element) => (menuCategoriesRefs.current[index] = element)}
            >
              <MenuCategory category={category} />
            </div>
          ))
        ) : (
          <MenuEmpty />
        )}
      </section>
    </main>
  );
}

export default Menu;

import { FiltersContext } from "@/context";
import { useFetch } from "@/hooks";
import { Dish } from "@/models";
import { useContext, useEffect, useState } from "react";

export function useFilters() {
  const { menu } = useFetch();
  const { filters, setFilters } = useContext(FiltersContext);

  if (filters === undefined && setFilters === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const [filteredMenu, setFilteredMenu] = useState<Dish[]>(menu);

  useEffect(() => {
    if (filters.length > 0) {
      const filtered = menu.filter(({ name }) => {
        const rawName = name.toLowerCase();
        const rawFilter = filters.toLowerCase();

        return rawName.includes(rawFilter);
      });
      setFilteredMenu(filtered);
    } else {
      setFilteredMenu(menu);
    }
  }, [filters, menu]);

  return { filters, setFilters, filteredMenu };
}

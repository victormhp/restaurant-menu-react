import { useEffect, useState } from "react";
import { Dish } from "@/models";

export function useFetch() {
  const [menu, setMenu] = useState<Dish[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("/mocks/food.json");

        if (res.ok) {
          const data: Dish[] = await res.json();
          setMenu(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    void fetchMenu();
  }, []);

  return { menu };
}

import { useFilters } from "@/hooks";
import { capitalize } from "@/utils";
import { MenuDish } from "@/components";

function MenuCategory({ category }: { category: string }) {
  const { filteredMenu: menu } = useFilters();
  const menuDishes = menu.filter((dish) => dish.category === category);

  return (
    <div className="space-y-8 mb-8">
      <h3 className="font-flame text-xl">{capitalize(category)}</h3>
      <article className="grid grid-cols-[repeat(auto-fit,300px)] gap-8 justify-center">
        {menuDishes.map((dish) => (
          <MenuDish key={dish.name} dish={dish} />
        ))}
      </article>
    </div>
  );
}

export default MenuCategory;

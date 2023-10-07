import { Icons } from "@/components";

function MenuEmpty() {
  return (
    <div className="shadow-md rounded-lg p-6 font-flame flex justify-center items-center">
      <Icons.utensils className="w-6 h-6 mr-2" />
      <p>No hay platillos que coincidan con tu búsqueda.</p>
    </div>
  );
}

export default MenuEmpty;

import { Icons, Input } from "@/components";
import { useFilters } from "@/hooks";
import { ChangeEvent, useId } from "react";

function SearchBar() {
  const searchId = useId();
  const { setFilters } = useFilters();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters(event.target.value);
  };

  return (
    <div className="relative w-full flex-1 sm:w-[350px] sm:flex-none">
      <Icons.search className="w-4 h-4 absolute my-auto top-[3px] bottom-0 left-3" />
      <Input
        id={searchId}
        placeholder="Buscar"
        onChange={handleChange}
        className="pl-9 pr-4 rounded-full border-primary"
      />
    </div>
  );
}

export default SearchBar;

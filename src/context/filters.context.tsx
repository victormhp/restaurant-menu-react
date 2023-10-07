import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface FiltersContext {
  filters: string;
  setFilters: Dispatch<SetStateAction<string>>;
}

export const FiltersContext = createContext<FiltersContext>({} as FiltersContext);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState("");

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

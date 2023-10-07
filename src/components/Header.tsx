import { SearchBar } from "@/components";

function Header() {
  return (
    <header className="sticky top-0 w-full bg-background border-b-2 border-primary/10 z-50">
      <div className="container p-2 flex justify-between items-center ">
        <a href="/" className="flex items-center space-x-2 rounded-md focusVisible">
          <img src="logo.svg" alt="Logo" className="w-10 h-10 mr-2 sm:mr-0" />
          <span className="hidden font-flame text-2xl sm:inline-block">Mi Isla del Sol</span>
        </a>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;

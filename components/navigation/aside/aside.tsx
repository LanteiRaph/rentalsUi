import NavLinks from "./NavLinks";

export interface IBaseTemplate {}

const Aside: React.FC<IBaseTemplate> = () => {
  return (
    <aside className="hidden md:block sticky w-64 h-full" aria-label="Sidebar">
        <NavLinks/>
    </aside>
  );
};

export default Aside;

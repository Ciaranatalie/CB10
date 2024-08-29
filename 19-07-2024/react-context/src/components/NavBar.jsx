import {NavLink} from "react-router-dom";
import {useContext} from "react";
import { ProductContext } from "../providers/ProductContext";

const menuList = [
    {name: "Home", path:"/"},
    { name: "About", path: "/about" },
    { name: "Contacts", path: "/contacts" },
    {name: "Cart", path:"/cart"},
]

const NavBar = () => {
    const {products} = useContext(ProductContext)
return (
    <nav className="flex items-center justify-between py-2 px-4">
        <h1 className="font-bold">Sito Bello</h1>
        <ul className="flex gap-4">
            {menuList.map((item,index) => (
                <li key= {index}>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? "font-bold underline" : "";
                    }}
                    to={item.path}
                >
                    {item.name}
                </NavLink>
                </li>
            ))}
        </ul>
    </nav>
    );
};
    
    export default NavBar;

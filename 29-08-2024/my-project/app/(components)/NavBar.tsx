"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navitems = [
  { path: "/", value: "Home" },
  { path: "/about", value: "About" },
  { path: "/products", value: "Products" },
  { path: "/login", value: "Login" },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex gap-2">
        {navitems.map((item, index) => {
          return (
            <li
              className={`${
                pathname === item.path && "underline bg-green-200"
              }`}
              key={"id-" + index}
            >
              <Link href={item.path}>{item.value}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
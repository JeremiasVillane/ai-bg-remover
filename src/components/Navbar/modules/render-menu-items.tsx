import { Link } from "react-router-dom";
import { menuItems } from "../constants";

export const renderMenuItems = (isMobile = false) =>
  menuItems.map((item, index) =>
    item.to ? (
      <Link
        key={index}
        to={item.to}
        className={`text-gray-600 hover:text-gray-900 ${
          isMobile ? "block px-3 py-2 rounded-md text-base font-medium" : ""
        }`}
      >
        {item.label}
      </Link>
    ) : (
      <a
        key={index}
        href={item.href}
        className={`text-gray-600 hover:text-gray-900 ${
          isMobile ? "block px-3 py-2 rounded-md text-base font-medium" : ""
        }`}
      >
        {item.label}
      </a>
    )
  );

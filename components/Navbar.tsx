"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

const Navbar = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

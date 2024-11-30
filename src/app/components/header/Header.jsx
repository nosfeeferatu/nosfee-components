import Link from "next/link";
import React from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LoginLink from "../loginLink/LoginLink";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between py-4 items-center">
        <div>
          <Link href="/" className="font-bold">
            Nosfee Components
          </Link>
        </div>
        <div className="flex gap-3">
          <ThemeToggle />
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <LoginLink />
        </div>
      </nav>
    </header>
  );
};

export default Header;

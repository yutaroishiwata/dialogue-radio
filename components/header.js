import React, { useState } from "react";
import Link from 'next/link'

const MenuBlock = ({ menuIsOpen }) => {
  const links = [
    { href: "/", label: "エピソード" },
    { href: "/posts", label: "ブログ" },
    { href: "/members", label: "メンバー" },
    { href: "/guests", label: "ゲスト" },
  ].map(link => ({
    ...link,
    key: `nav-link-${link.href}-${link.label}`
  }));

  return (
    <div className="flex flex-wrap w-full md:ml-auto md:w-8/12">
      <ul
        className={`flex flex-wrap justify-around flex-grow items-center bg-darkgray-800 font-bold md:bg-transparent -mx-8 md:mx-0 px-8 md:px-0 my-4 md:my-0 w-full md:w-auto ${
          menuIsOpen ? "" : "h-0 overflow-hidden md:overflow-auto md:h-auto"
        }`}
      >
        {links.map(({ key, href, label }) => (
          <li key={key} className="w-full py-2 text-white md:w-auto md:py-auto">
            <Link href={href}>
              <a className="text-current">{label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => toggleSubscriberBox(true)}
        className="px-5 py-4 bg-black text-white font-bold rounded-md hover:"
      >
        レターを受け取る
      </button>
    </div>
  );
};

const Header = () => {
  const [menuIsOpen, toggleMenu] = useState(false);

  return (
    <header className="container flex flex-wrap py-6 mb-10 border-b-2 border-white border-opacity-50">
      <div className="flex flex-col">
        <h1 className="specific-font text-3xl font-bold">
          <Link href="/">
            <a className="hover:underline">Dialogue Radio</a>
           </Link>
        </h1>
        <p className="font-semibold">多様なライフストーリーに出会う場所</p>
      </div>
      <nav className="flex-auto">
        <MenuBlock menuIsOpen={menuIsOpen} />
      </nav>
    </header>
  );
};

export default Header

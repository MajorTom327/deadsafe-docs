import React from "react";
import { Menu } from "react-daisyui";
import { Link } from "@remix-run/react";
import logoSrc from "~/assets/deadsafe_logo.webp";

type Props = {};

export const Sidebar: React.FC<Props> = ({}) => {
  return (
    <>
      <Menu className="bg-base-100 w-56 shadow-xl">
        <Menu.Item>
          <Link to="/" className="justify-center">
            <img src={logoSrc} alt="logo" className="w-32 h-auto" />
          </Link>
        </Menu.Item>
        <Menu.Item tabIndex={0}>
          <Link to="/lore">Lore</Link>
        </Menu.Item>
        <Menu.Item className="pl-4">
          <Link to="/lore/universe">Universe</Link>
        </Menu.Item>
        <Menu.Item className="pl-4">
          <Link to="/lore/crypto-karen">CryptoKaren</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/game">Game</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/the-safe">The Safe</Link>
        </Menu.Item>
        <Menu.Item className="pl-2">
          <Link to="/the-safe/keys">The Keys</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;

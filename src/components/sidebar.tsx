import React from "react";
import {Menu} from "react-daisyui";
import logoSrc from "~/assets/deadsafe_logo.webp";

type Props = {};

export const Sidebar: React.FC<Props> = ({}) => {
  return (
    <>

      <Menu className="bg-base-200 w-56 shadow-xl rounded m-2">
        <Menu.Item>
          <a href="/" className="justify-center">
            <img
              src={logoSrc.src}
              alt="logo"
              className="w-32 h-auto"
            />
          </a>
        </Menu.Item>
        <Menu.Item tabIndex={0}>
          <a href="/lore">Lore</a>
        </Menu.Item>
        <Menu.Item className="pl-4">
          <a href="/lore/universe">Universe</a>
        </Menu.Item>
        <Menu.Item className="pl-4">
          <a href="/lore/crypto-karen">CryptoKaren</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/game">Game</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/the-safe">The Safe</a>
        </Menu.Item>
        <Menu.Item className="pl-4">
          <a href="/the-safe/keys">The Keys</a>
        </Menu.Item>
      </Menu>
    </>
  );
};

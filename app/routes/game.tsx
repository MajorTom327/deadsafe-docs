import React from "react";
import { Outlet } from "@remix-run/react";

type Props = {};

export const Game: React.FC<Props> = ({}) => {
  return (
    <>
      <Outlet />
    </>
  );
};

Game.defaultProps = {};

export default Game;

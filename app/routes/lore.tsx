import React from "react";
import { Outlet } from "@remix-run/react";

type Props = {};

export const Lore: React.FC<Props> = ({}) => {
  return (
    <>
      <Outlet />
    </>
  );
};

Lore.defaultProps = {};

export default Lore;

import React from "react";
import { Outlet } from "@remix-run/react";

type Props = {};

export const TheSafe: React.FC<Props> = ({}) => {
  return (
    <>
      <Outlet />
    </>
  );
};

TheSafe.defaultProps = {};

export default TheSafe;

import React, { useState } from "react";
import { Navbar, Button, Drawer } from "react-daisyui";
import { not } from "ramda";
import Sidebar from "./Sidebar";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Navbar className="bg-base-100 shadow-xl rounded-box">
        <div className="flex-none">
          <Button
            shape="square"
            color="ghost"
            onClick={() => setIsDrawerOpen(not)}
          >
            <BsLayoutTextSidebarReverse />
          </Button>
        </div>
        <div className="flex-1">
          <Button className="text-xl normal-case" color="ghost">
            The DeadSafe
          </Button>
        </div>
        <div className="flex-none"></div>
      </Navbar>

      <Drawer
        side={<Sidebar />}
        mobile
        open={isDrawerOpen}
        onClickOverlay={() => setIsDrawerOpen(not)}
      >
        <div className="container mx-auto py-2 px-6 flex flex-col gap-2">
          {children}
        </div>
      </Drawer>
    </>
  );
};

Layout.defaultProps = {};

export default Layout;

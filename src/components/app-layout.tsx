import React from "react";
import {Button, Navbar} from "react-daisyui";
import {Sidebar} from "~/components/sidebar";

type Props = {
  children: React.ReactNode;
};

export const AppLayout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Navbar className="bg-base-100 shadow-xl rounded-box">
        <div className="flex-1">
          <Button className="text-xl normal-case" color="ghost">
            The DeadSafe
          </Button>
        </div>
        <div className="flex-none"></div>
      </Navbar>


      <div className="flex gap-2">

        <Sidebar/>

        <div className="container mx-auto py-2 px-6 flex flex-col gap-2 w-full">
          {children}
        </div>
      </div>

    </>
  );
};
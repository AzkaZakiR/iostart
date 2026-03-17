import React from "react";
import { Account } from "./Account";
import { Search } from "./Search";
import { RouteSelect } from "./RouteSelector";

export const Sidebar = () => {
   return (
      <div>
         <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
            <Account />
            <Search />
            <RouteSelect />
         </div>
      </div>
   );
};

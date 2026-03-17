import React from "react";
import { FiCalendar } from "react-icons/fi";

export const TopBar = () => {
   const today = new Date();

   const HariIni = today.toLocaleDateString("id-ID", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
   });
   return (
      <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
         <div className="flex items-center justify-between p-0.5">
            <div>
               <span className="text-sm font-bold block">Hallo Admin IOTERA</span>
               <span className="text-xs block text-stone-500">{HariIni}</span>
            </div>
         </div>
      </div>
   );
};

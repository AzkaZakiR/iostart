import type { IconType } from "react-icons";
import { FiDollarSign, FiHome, FiFileText, FiPaperclip, FiUsers } from "react-icons/fi";
import { FaReceipt } from "react-icons/fa";
import { NavLink } from "react-router";
export const RouteSelect = () => {
   return (
      <div className="space-y-1">
         <Route Icon={FiHome} title="Dashboard" to="/dashboard" />
         <Route Icon={FaReceipt} title="Transactions" to="/transactions" />
         <Route Icon={FiFileText} title="Devices Log" to="/devices-log" />
      </div>
   );
};

const Route = ({ Icon, title, to }: { Icon: IconType; title: string; to: string }) => {
   return (
      <NavLink to={to} end={to === "/"} className={({ isActive }) => `flex items-center gap-2 w-full rounded px-2 py-1.5 text-sm transition ${isActive ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 text-stone-500"}`}>
         <Icon />
         <span>{title}</span>
      </NavLink>
   );
};

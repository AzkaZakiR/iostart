import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const Account = () => {
   return (
      <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
         <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
            <img
               src="https://media.licdn.com/dms/image/v2/C560BAQH_v7csPJS-Bw/company-logo_200_200/company-logo_200_200/0/1631429090681/iotera_logo?e=2147483647&v=beta&t=iQQ2RFKUbOmJ0ju0Xds5_Fs3UCrqHPeskKuHKIW7pGc"
               alt="avatar"
               className="size-8 rounded shrink-0 bg-violet-500 shadow"
            />
            <div className="text-start">
               <span className="text-sm font-bold block">Admin Iotera</span>
               <span className="text-xs block text-stone-500">Iotera@Iotera.com</span>
            </div>

            <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
            <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
         </button>
      </div>
   );
};

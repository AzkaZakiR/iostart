import type React from "react";
import { FiCpu, FiActivity, FiCircle } from "react-icons/fi";

interface StatCardsProps {
   devices: any[];
   loading: boolean;
}

export const DeviceLog: React.FC<StatCardsProps> = ({ devices, loading }) => {
   if (loading)
      return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
               <SkeletonCard key={i} />
            ))}
         </div>
      );

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         {devices.map((device, index) => (
            <Card key={index} deviceName={device.device_id} deviceType={device.device_type} status={device.logs?.[device.logs.length - 1]?.message} />
         ))}
      </div>
   );
};

const Card = ({ deviceName, deviceType, status }: { deviceName: string; deviceType: string; status: string }) => {
   const isOnline = status?.toLowerCase() === "online";

   return (
      <div className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-5 transition-all hover:border-blue-400 hover:shadow-md">
         <div className="flex items-start justify-between mb-6">
            <div className="rounded-lg bg-stone-100 p-2 text-stone-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
               <FiCpu size={20} />
            </div>

            <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${isOnline ? "bg-emerald-50 text-emerald-700" : "bg-stone-100 text-stone-500"}`}>
               <span className={`h-1.5 w-1.5 rounded-full ${isOnline ? "bg-emerald-500 animate-pulse" : "bg-stone-400"}`} />
               online
            </div>
         </div>

         <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">ID: {deviceName}</p>
            <h3 className="text-xl font-bold text-stone-800 truncate">{deviceType}</h3>
         </div>

         <div className="mt-6 flex items-center justify-between border-t border-stone-50 pt-4 text-xs text-stone-400">
            <div className="flex items-center gap-1">
               Latest status:
               <span>{status}</span>
            </div>
            <FiCircle size={10} className="fill-current opacity-20" />
         </div>
      </div>
   );
};

const SkeletonCard = () => {
   return (
      <div className="rounded-xl border border-stone-200 bg-white p-5 animate-pulse">
         <div className="flex items-start justify-between mb-6">
            <div className="h-8 w-8 rounded-lg bg-stone-200" />
            <div className="h-4 w-16 rounded-full bg-stone-200" />
         </div>
         <div>
            <div className="h-3 w-24 bg-stone-200 rounded mb-2" />
            <div className="h-5 w-32 bg-stone-300 rounded" />
         </div>
         <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
            <div className="h-3 w-24 bg-stone-200 rounded" />
            <div className="h-3 w-3 bg-stone-200 rounded-full" />
         </div>
      </div>
   );
};

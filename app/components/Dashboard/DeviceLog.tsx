import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

interface StatCardsProps {
   transactions: any[];
   loading: boolean;
}
export const DeviceLog = () => {
   return (
      <>
         <Card deviceName="Device abc..." deviceType="apa aja lah" status="Dari Januari 20xx - Desember 20xx" />
         <Card deviceName="Total abc.." deviceType="apa aja lah" status="Dari Januari 20xx - Desember 20xx" />
      </>
   );
};

const Card = ({ deviceName, deviceType, status }: { deviceName: string; deviceType: string; status: string }) => {
   return (
      <div className="col-span-4 p-4 rounded border border-stone-300">
         <div className="flex mb-8 items-start justify-between">
            <div>
               <h3 className="text-stone-500 mb-2 text-sm">{deviceName}</h3>
               <p className="text-3xl font-semibold">{deviceType}</p>
            </div>
         </div>

         <p className="text-xs text-stone-500">{status}</p>
      </div>
   );
};

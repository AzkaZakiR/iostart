import axios from "axios";
import React, { useEffect, useState } from "react";
import { DeviceLog } from "~/components/Dashboard/DeviceLog";
import { LogTable } from "~/components/Dashboard/DeviceLogList";
import { TransactionsList } from "~/components/Dashboard/TransactionsList";
import { Sidebar } from "~/components/Sidebar/Sidebar";
import { parseLogString } from "~/utils/parseLog";
import { ApiDevices } from "~/utils/utils";

export default function DevicesLog() {
   const [devicesLog, setdevicesLog] = useState<any[]>([]);
   const [loading, SetLoading] = useState(true);

   useEffect(() => {
      const getTransactions = async () => {
         try {
            const response = await axios.get(ApiDevices);
            const devicesLog = Object.values(response.data);
            setdevicesLog(devicesLog);
         } catch (error) {
            console.log("Error fetching transactions:", error);
         } finally {
            SetLoading(false);
         }
      };
      getTransactions();
   }, []);

   const transformDevices = (data: any) => {
      return Object.values(data).map((device: any) => ({
         device_id: device.device_id,
         device_type: device.device_type,
         logs: parseLogString(device.log),
      }));
   };
   const transformedDevices = transformDevices(devicesLog);
   console.log("ini devices", transformedDevices);
   return (
      <main className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 p-4">
         <Sidebar />
         <div className="px-4">
            <DeviceLog devices={transformedDevices} loading={loading} />
            <LogTable devices={transformedDevices} loading={loading} />
         </div>
      </main>
   );
}

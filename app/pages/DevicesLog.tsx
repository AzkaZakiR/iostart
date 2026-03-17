import axios from "axios";
import React, { useEffect, useState } from "react";
import { DeviceLog } from "~/components/Dashboard/DeviceLog";
import { TopBar } from "~/components/Dashboard/TopBar";
import { TransactionsList } from "~/components/Dashboard/TransactionsList";
import { Sidebar } from "~/components/Sidebar/Sidebar";
import { ApiDevices } from "~/utils/utils";

export default function DevicesLog() {
   const [devicesLog, setdevicesLog] = useState<any[]>([]);
   const [loading, SetLoading] = useState(true);

   useEffect(() => {
      const getTransactions = async () => {
         try {
            const response = await axios.post(ApiDevices);
            const devicesLog = Object.values(response.data);
            console.log(devicesLog);
            console.log("data 1", devicesLog[0]);
            setdevicesLog(devicesLog);
         } catch (error) {
            console.log("Error fetching transactions:", error);
         } finally {
            SetLoading(false);
         }
      };
      getTransactions();
   }, []);
   return (
      <main className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 p-4">
         <Sidebar />
         <div className="px-4 grid gap-3 grid-cols-12">
            <DeviceLog />
         </div>
      </main>
   );
}

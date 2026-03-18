import React, { useEffect, useState } from "react";
import axios from "axios";
import { ApiTransactions, ApiDevices } from "~/utils/utils";
import { StatCards } from "./StatCards";
import { TransactionsList } from "./TransactionsList";
import { parseLogString } from "~/utils/parseLog";
import { DeviceLog } from "./DeviceLog";

export const Grid = () => {
   const [transactions, setTransactions] = useState<any[]>([]);
   const [loading, SetLoading] = useState(true);
   const [devicesLog, setdevicesLog] = useState<any[]>([]);

   useEffect(() => {
      const getTransactions = async () => {
         try {
            const response = await axios.get(ApiTransactions);
            const transactionList = Object.values(response.data.data);
            setTransactions(transactionList);
         } catch (error) {
            console.log("Error fetching transactions:", error);
         } finally {
            SetLoading(false);
         }
      };
      getTransactions();
   }, []);

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

   return (
      <div className="px-4 flex flex-col gap-3">
         <StatCards transactions={transactions} loading={loading} />
         <TransactionsList transactions={transactions} loading={loading} isPage={false} />
         <DeviceLog devices={transformedDevices} loading={loading} />
      </div>
   );
};

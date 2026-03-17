import React, { useEffect, useState } from "react";
import axios from "axios";
import { ApiTransactions } from "~/utils/utils";

import { StatCards } from "./StatCards";
import { TransactionsList } from "./TransactionsList";
export const Grid = () => {
   const [transactions, setTransactions] = useState<any[]>([]);
   const [loading, SetLoading] = useState(true);

   useEffect(() => {
      const getTransactions = async () => {
         try {
            const response = await axios.post(ApiTransactions, {
               username: "user",
               password: "password",
            });
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

   return (
      <div className="px-4 grid gap-3 grid-cols-12">
         <StatCards transactions={transactions} loading={loading} />
         <TransactionsList transactions={transactions} loading={loading} isPage={false} />
      </div>
   );
};

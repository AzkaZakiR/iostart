import axios from "axios";
import React, { useEffect, useState } from "react";
import { TopBar } from "~/components/Dashboard/TopBar";
import { TransactionsList } from "~/components/Dashboard/TransactionsList";
import { Sidebar } from "~/components/Sidebar/Sidebar";
import { ApiTransactions } from "~/utils/utils";

export default function Transaction() {
   const [transactions, setTransactions] = useState<any[]>([]);
   const [loading, SetLoading] = useState(true);

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
   return (
      <main className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 p-4">
         <Sidebar />
         <div className="px-4 grid gap-3 grid-cols-12">
            <TransactionsList transactions={transactions} loading={loading} isPage={true} />
         </div>
      </main>
   );
}

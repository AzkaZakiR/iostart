import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router";

interface TransactionsListProps {
   transactions: any[];
   loading: boolean;
   isPage: boolean;
}
export const TransactionsList: React.FC<TransactionsListProps> = ({ transactions, loading, isPage }) => {
   const displayedTransactions = isPage ? transactions : transactions.slice(0, 10);
   console.log("isPage:", isPage);
   console.log("transactions length:", transactions.length);
   console.log("displayedTransactions length:", displayedTransactions.length);
   return (
      <div className="col-span-12 p-4 rounded border border-stone-300">
         <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-1.5 font-medium">
               <FiDollarSign /> List Transaksi Terakhir
            </h3>
            <Link to="/transactions" className="text-sm text-blue-800 hover:underline">
               Lihat semua data
            </Link>
         </div>
         <table className="w-full table-auto">
            <TableHead />

            <tbody>
               {loading
                  ? Array.from({ length: 5 }).map((_, idx) => (
                       <tr key={idx} className="bg-stone-100 animate-pulse">
                          {Array.from({ length: 6 }).map((_, colIdx) => (
                             <td key={colIdx} className="p-1.5">
                                <div className="h-4 bg-stone-300 rounded w-full"></div>
                             </td>
                          ))}
                       </tr>
                    ))
                  : displayedTransactions.map((tx, index) => (
                       <TableRow
                          key={index}
                          TransactionId={tx.detail.order_id || "#N/A"}
                          productName={tx.product.name}
                          date={new Date(tx.time.timestamp).toLocaleDateString("id-ID")}
                          price={`Rp. ${tx.payment.amount ?? 0} `}
                          amount={tx.product.quantity}
                          paymentMethod={tx.payment.method || "Metode tidak dikenal"}
                          order={index + 1}
                       />
                    ))}
            </tbody>
         </table>
      </div>
   );
};

const TableHead = () => {
   return (
      <thead>
         <tr className="text-sm font-normal text-stone-500">
            <th className="text-start p-1.5">No.</th>
            <th className="text-start p-1.5">ID Transaksi</th>
            <th className="text-start p-1.5">Nama Produk</th>
            <th className="text-start p-1.5">Date</th>
            <th className="text-start p-1.5">Harga</th>
            <th className="text-start p-1.5">Metode Pembayaran</th>
            <th className="text-start p-1.5">Jumlah</th>
            <th className="w-8"></th>
         </tr>
      </thead>
   );
};

const TableRow = ({ TransactionId, productName, date, price, amount, paymentMethod, order }: { TransactionId: string; productName: string; date: string; price: string; amount: number; paymentMethod: string; order: number }) => {
   return (
      <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
         <td className="p-1.5">{order}</td>
         <td className="p-1.5">{TransactionId}</td>
         <td className="p-1.5">{productName}</td>
         <td className="p-1.5">{date}</td>
         <td className="p-1.5">{price}</td>
         <td className="p-1.5">{paymentMethod}</td>
         <td className="p-1.5">{amount}</td>
         <td className="w-8">
            <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
               <FiMoreHorizontal />
            </button>
         </td>
      </tr>
   );
};

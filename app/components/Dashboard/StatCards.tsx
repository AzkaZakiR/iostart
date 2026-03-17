import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

interface StatCardsProps {
   transactions: any[];
   loading: boolean;
}
export const StatCards: React.FC<StatCardsProps> = ({ transactions, loading }) => {
   const totalTransactions = transactions.length.toString();
   const successTransaction = transactions.filter((tx) => tx.detail.transaction_status === "settlement").length.toString();
   return (
      <>
         <Card title="Total Transaksi di 20xx" value={`${totalTransactions} transaksi`} period="Dari Januari 20xx - Desember 20xx" />
         <Card title="Total Produk Terjual" value={`${successTransaction} Produk`} period="Dari Januari 20xx - Desember 20xx" />
      </>
   );
};

const Card = ({ title, value, period }: { title: string; value: string; period: string }) => {
   return (
      <div className="col-span-4 p-4 rounded border border-stone-300">
         <div className="flex mb-8 items-start justify-between">
            <div>
               <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
               <p className="text-3xl font-semibold">{value}</p>
            </div>
         </div>

         <p className="text-xs text-stone-500">{period}</p>
      </div>
   );
};

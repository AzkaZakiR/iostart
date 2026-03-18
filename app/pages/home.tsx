import { Dashboard } from "~/components/Dashboard/Dashboard";
import { Sidebar } from "~/components/Sidebar/Sidebar";

export default function Home() {
   return (
      <main className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 p-4">
         <Sidebar />
         <Dashboard />
      </main>
   );
}

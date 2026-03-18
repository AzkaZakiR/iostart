import React, { useState } from "react";

// Types remain the same
type Log = { timestamp: string; level: string; source: string; message: string };
type Device = { device_id: string; device_type: string; logs: Log[] };
type Props = { devices: Device[]; loading?: boolean };

export const LogTable: React.FC<Props> = ({ devices, loading }) => {
   const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

   if (loading) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="ml-3 text-gray-500 font-medium">Mengambil logs...</p>
         </div>
      );
   }

   return (
      <div className="flex flex-col md:flex-row gap-6 mt-6 h-[calc(100vh-150px)] min-h-[500px]">
         <div className="w-full md:w-72 flex flex-col gap-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 px-1">Devices</h2>
            <div className="flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
               {devices.map((device) => (
                  <button
                     key={device.device_id}
                     onClick={() => setSelectedDevice(device)}
                     className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                        selectedDevice?.device_id === device.device_id ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-500" : "bg-gray-50 border-gray-200 hover:border-gray-300 text-gray-600"
                     }`}
                  >
                     <p className={`text-[10px] font-mono mb-1 ${selectedDevice?.device_id === device.device_id ? "text-blue-500" : "text-gray-400"}`}>ID: {device.device_id}</p>
                     <p className={`font-bold truncate ${selectedDevice?.device_id === device.device_id ? "text-gray-900" : ""}`}>{device.device_type}</p>
                  </button>
               ))}
            </div>
         </div>

         <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {!selectedDevice ? (
               <div className="flex-1 flex flex-col items-center justify-center text-gray-400 bg-gray-50/50">
                  <svg className="w-12 h-12 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm font-medium">Pilih Device dari kiri untuk melihat Log</p>
               </div>
            ) : (
               <>
                  <div className="px-6 py-4 bg-white border-b border-gray-100 flex justify-between items-center">
                     <div>
                        <h3 className="text-gray-900 font-bold">{selectedDevice.device_type}</h3>
                        <p className="text-gray-500 text-xs">Total {selectedDevice.logs.length} entries</p>
                     </div>
                     <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-[10px] font-bold text-green-700 uppercase tracking-tight">Active</span>
                     </div>
                  </div>

                  <div className="flex-1 overflow-auto">
                     <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 sticky top-0 z-10 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
                           <tr>
                              <th className="px-6 py-4 border-b border-gray-100">Timestamp</th>
                              <th className="px-6 py-4 border-b border-gray-100">Level</th>
                              <th className="px-6 py-4 border-b border-gray-100">Source</th>
                              <th className="px-6 py-4 border-b border-gray-100">Log Message</th>
                           </tr>
                        </thead>
                        <tbody className="font-mono text-xs">
                           {selectedDevice.logs.map((log, i) => (
                              <tr key={i} className="group hover:bg-blue-50/30 border-b border-gray-50 transition-colors">
                                 <td className="px-6 py-4 text-gray-400 whitespace-nowrap">{log.timestamp}</td>
                                 <td className="px-6 py-4">
                                    <span
                                       className={`inline-block px-2 py-1 rounded-md text-[10px] font-bold border ${
                                          log.level === "ERROR" ? "bg-red-50 text-red-600 border-red-100" : log.level === "WARNING" ? "bg-amber-50 text-amber-600 border-amber-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"
                                       }`}
                                    >
                                       {log.level}
                                    </span>
                                 </td>
                                 <td className="px-6 py-4 text-gray-600 font-medium">{log.source}</td>
                                 <td className={`px-6 py-4 leading-relaxed ${log.level === "ERROR" ? "text-red-700 font-medium" : "text-gray-700"}`}>{log.message}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

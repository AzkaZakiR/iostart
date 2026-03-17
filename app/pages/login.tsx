import { useState } from "react";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = (e: any) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleLogin} className="space-y-4">
               {/* Email */}
               <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
               </div>

               {/* Password */}
               <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
               </div>

               {/* Button */}
               <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Sign In
               </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-500">
               Don’t have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
            </p>
         </div>
      </div>
   );
}

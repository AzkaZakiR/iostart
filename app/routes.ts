import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("login", "pages/login.tsx"), route("dashboard", "pages/home.tsx"), route("transactions", "pages/Transaction.tsx"), route("devices-log", "pages/DevicesLog.tsx")] satisfies RouteConfig;

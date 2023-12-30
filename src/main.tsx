import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App.tsx";
import { About } from "./pages/About.tsx";
import { Navbar } from "./components/Navbar.tsx";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";

const rootRoute = new RootRoute({
  component: () => (
    <div className="h-svh	flex flex-col ">
      <Navbar />
      <Outlet />
    </div>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

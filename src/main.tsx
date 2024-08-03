import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp.tsx";
import Login from "./pages/Login.tsx";
import ErrorPage from "./error-page.tsx";
import PrivateRoutes from "./private-routes/PrivateRoutes.tsx";
import AuthProvider from "./context-providers/AuthProvider.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <App />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

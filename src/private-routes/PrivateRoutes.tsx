import { ReactNode } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="text-center justify-center flex items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;

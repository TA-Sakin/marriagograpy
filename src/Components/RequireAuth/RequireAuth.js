import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../Spinner/Spinner";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  //   else {
  //     navigate(from, { replace: true });
  //   }
  return children;
};

export default RequireAuth;

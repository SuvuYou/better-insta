import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

const NotForLoggedInRoute: FC<{
  user: any;
  navigateTo: string;
}> = ({ user, navigateTo }) => {
  return !user ? <Outlet /> : <Navigate to={navigateTo} />;
};

export default NotForLoggedInRoute;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hookers/use-auth-listener";
import UserContext from "./context/auth";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const { user } = useAuthListener();
  console.log(user);

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

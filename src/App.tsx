import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from "./constants/routes";
import useAuthListener from "./hookers/use-auth-listener";
import UserContext from "./context/auth";
import ProtectedRoute from "./helpers/protectedRoute";
import NotForLoggedInRoute from "./helpers/notForLoggedInRoute";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path={ROUTES.SIGN_UP}
              element={
                <NotForLoggedInRoute
                  user={user}
                  navigateTo={ROUTES.DASHBOARD}
                />
              }
            >
              <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
            </Route>
            <Route
              path={ROUTES.LOGIN}
              element={
                <NotForLoggedInRoute
                  user={user}
                  navigateTo={ROUTES.DASHBOARD}
                />
              }
            >
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            </Route>
            <Route
              path={ROUTES.DASHBOARD}
              element={<ProtectedRoute user={user} />}
            >
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            </Route>
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

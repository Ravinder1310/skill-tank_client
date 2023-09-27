import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import PageNotFound from "./pages/PageNotFound";
import UserProfile from "./pages/UserProfile";
import ForgotPassword from "./pages/ForgotPassword";
import AllUser from "./pages/AllUsers";
import Authentication from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/user/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/*" element={<PageNotFound />} />
          <Route path="admin/users" element={<PrivateRoute><AllUser /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;

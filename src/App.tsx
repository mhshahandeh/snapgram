import "./globals.css";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout />}>
        <Route path="/sing-in" element={<SigninForm />} />
        <Route path="/sing-up" element={<SignupForm />} />
      </Route>

      {/* private routes */}
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

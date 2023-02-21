import { Routes, Route } from "react-router-dom";
import { AlertMesssage } from "components";
import { Dashboard, LoginPage, RegisterPage, PasswordRecovery } from "pages";

export const AppRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="passwordRecovery" element={<PasswordRecovery />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<AlertMesssage message={"pageNotFound"} />} />
    </Routes>
  );
};

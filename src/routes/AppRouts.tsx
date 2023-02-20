import { Routes, Route } from "react-router-dom";
import { Dashboard, LoginPage } from "pages";

export const AppRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<p>404</p>} />
    </Routes>
  );
};

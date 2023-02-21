import { Routes, Route } from "react-router-dom";
import { AlertMesssage } from "components";
import {
  LoginPage,
  PasswordRecovery,
  AdminPanel,
  PendingPosts,
  BannerPosts,
  SettingsPage,
} from "pages";

export const AppRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="passwordRecovery" element={<PasswordRecovery />} />
      <Route path="admin" element={<AdminPanel />}>
        <Route path="pending" element={<PendingPosts />} />
        <Route path="banner" element={<BannerPosts />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<AlertMesssage message={"pageNotFound"} />} />
    </Routes>
  );
};

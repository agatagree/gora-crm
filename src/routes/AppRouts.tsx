import { Routes, Route } from "react-router-dom";
import { AlertMessage } from "components";
import {
  LoginPage,
  PasswordRecovery,
  AdminPanel,
  PendingPosts,
  BannerPosts,
  SettingsPage,
  Dashboard,
  AddItem,
  SingleItem,
} from "pages";

export const AppRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="passwordRecovery" element={<PasswordRecovery />} />
      <Route element={<AdminPanel />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path=":id" element={<SingleItem />} />
        </Route>
        <Route path="add" element={<AddItem />} />
        <Route path="pending" element={<PendingPosts />} />
        <Route path="banner" element={<BannerPosts />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<AlertMessage message={"pageNotFound"} />} />
      </Route>
      <Route path="*" element={<AlertMessage message={"pageNotFound"} />} />
    </Routes>
  );
};

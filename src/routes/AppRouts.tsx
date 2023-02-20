import { Routes, Route } from "react-router-dom";
import { Dashboard } from "pages";

export const AppRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

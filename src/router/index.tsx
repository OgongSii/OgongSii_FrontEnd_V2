import { Route, Routes } from "react-router-dom";
import Login from "../components/Common/Auth/Login";
import SignUp from "../components/Common/Auth/SignUp";
import HomePage from "../pages/HomePage";
import NotFound from "../components/Common/NotFound";
import RankPage from "../pages/RankPage";
import UserPage from "../pages/UserPage";
import RecordPage from "../pages/RecordPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/rank" element={<RankPage />} />
      <Route path="user" element={<UserPage />} />
      <Route path="/record" element={<RecordPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

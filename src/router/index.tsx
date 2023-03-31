import { Route, Routes } from "react-router-dom";
import Login from "../components/Common/Login";
import SignUp from "../components/Common/SignUp";
import HomePage from "../pages/HomePage";
import NotFound from "../components/Common/NotFound";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
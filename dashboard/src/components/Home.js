import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
    const [cookies, , removeCookie] = useCookies(["token"]);
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                window.location.href = "http://localhost:3000/login";
                return;
            }
            try {
                const { data } = await axios.post(
                    "http://localhost:3002/",
                    {},
                    { withCredentials: true }
                );
                const { status, user } = data;
                if (status) {
                    setUser(user);
                    setLoading(false);
                } else {
                    removeCookie("token", { path: "/" });
                    window.location.href = "http://localhost:3000/login";
                }
            } catch (error) {
                console.error("Verification failed:", error);
                window.location.href = "http://localhost:3000/login";
            }
        };
        verifyCookie();
    }, [cookies, removeCookie]);

    const handleLogout = () => {
        console.log("Logging out...");
        removeCookie("token", { path: "/" });
        localStorage.clear();
        sessionStorage.clear();
        window.location.replace("http://localhost:3000/login");
    };

    if (loading && cookies.token) {
        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Loading...</div>;
    }

    return (
        <>
            <TopBar user={user} onLogout={handleLogout} />
            <Dashboard user={user} />
            <ToastContainer />
        </>
    );
};

export default Home;

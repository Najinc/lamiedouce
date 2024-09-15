import React from "react";
import "./build.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes/index";
import Tools from "./components/Tools";

export default function App() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Router />
            <Footer />
            <Tools />
        </div>
    );
}

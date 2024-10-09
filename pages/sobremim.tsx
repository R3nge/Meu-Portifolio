import React from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Encryption from "@/components/main/Encryption";

const EncryptionPage = () => {
    return (
        <div className="h-full w-full">
            <Navbar />
            <main className="flex flex-col items-center justify-center min-h-screen">
                <Encryption />
            </main>
            <Footer />
        </div>
    );
};

export default EncryptionPage;

"use client";

import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../../../utils/storage";

// CookieBanner component that displays a banner for cookie consent.
export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Retrieve cookie consent status from local storage on component mount
    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
        setCookieConsent(storedCookieConsent);
        setIsLoading(false);
    }, []);

    // Update local storage and Google Analytics consent status when cookieConsent changes
    useEffect(() => {
        if (cookieConsent !== null) {
            setLocalStorage("cookie_consent", cookieConsent);
        }

        const newValue = cookieConsent ? "granted" : "denied";

        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: newValue,
            });
        }
    }, [cookieConsent]);

    // Do not render the banner if loading or consent is already given
    if (isLoading || cookieConsent !== null) {
        return null;
    }

    return (
        <div className="cookie-banner fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 shadow-lg z-50">
            <div className="flex justify-between items-center">
                <div className="text-gray-700">
                    <p>This site uses cookies:</p>
                </div>
                <div className="flex space-x-4">
                    <button
                        className="bg-gray-200 text-gray-700 rounded px-4 py-2 hover:bg-gray-300 transition"
                        onClick={() => setCookieConsent(false)}
                    >
                        Decline
                    </button>
                    <button
                        className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition"
                        onClick={() => setCookieConsent(true)}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}

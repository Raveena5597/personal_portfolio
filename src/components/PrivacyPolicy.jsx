import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 text-gray-800 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-500 mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy outlines the
        types of personal information that is collected and how it is used.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect information such as your name, email address, and usage
        data when you interact with our site. This helps us improve our
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        Information collected may be used to personalize user experience,
        improve the site, and respond to customer requests.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services such as Google AdSense, which may use
        cookies to serve ads based on your prior visits to this or other
        websites.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Consent</h2>
      <p className="mb-8">
        By using our website, you consent to our Privacy Policy.
      </p>

      {/* Back to Home button */}
      <Link
        to="/"
        className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-500 transition-all duration-300"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

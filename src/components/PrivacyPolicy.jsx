import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-purple-500 mb-6">Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p className="mt-4">
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with <strong>raveenawrites.com</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p>
        When you visit our site, we may collect certain information automatically, including your IP address, browser type, time zone, and some of the cookies installed on your device. 
        Additionally, we collect information about the individual pages you view, what websites or search terms referred you to the site, and how you interact with our content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
      <p>
        We use cookies to enhance your browsing experience. Cookies are small data files placed on your device or computer and often include an anonymous unique identifier. You can disable cookies in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Google AdSense</h2>
      <p>
        We use Google AdSense to serve ads on this website. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our site or other websites. 
        You may opt out of personalized advertising by visiting{" "}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-pink-500 underline">
          Google Ads Settings
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <p>
        We use the information we collect to improve our website, understand user behavior, and display relevant advertisements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Services</h2>
      <p>
        We may use third-party services (like analytics tools and ad networks) that collect, monitor, and analyze data to help us improve your experience.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access, update, or delete the personal information we hold about you.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{" "}
        <a href="mailto:raveenawrites@gmail.com" className="text-pink-500 underline">raveenawrites@gmail.com</a>.
      </p>
    </div>
  );
}

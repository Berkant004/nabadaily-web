import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account – Naba Daily",
  description: "Request deletion of your Naba Daily account and data.",
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/app_icon.png"
              alt="Naba Daily"
              width={32}
              height={32}
              className="rounded-xl"
            />
            <span className="font-semibold text-gray-900">Naba Daily</span>
          </Link>
          <Link href="/privacy" className="text-sm font-medium" style={{ color: "#17614D" }}>
            Privacy Policy →
          </Link>
        </div>
      </header>

      <div style={{ backgroundColor: "#17614D" }} className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm font-medium mb-2 uppercase tracking-wide">Account</p>
          <h1 className="text-3xl font-bold text-white mb-2">Delete Your Account</h1>
          <p className="text-green-200">We will permanently remove your account and all associated data.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Option 1 — In-App */}
          <div className="p-8 border-b border-gray-50">
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#17614D" }}>
              Option 1 — Delete directly in the app
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The fastest way to delete your account is directly inside Naba Daily:
            </p>
            <ol className="space-y-3">
              {[
                "Open the Naba Daily app.",
                "Tap the Settings icon in the top-right corner of the home screen.",
                'Scroll down and tap "Delete Account".',
                "Confirm the deletion when prompted.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 text-gray-600">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "#34A853" }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-4 rounded-xl p-4" style={{ backgroundColor: "#FEF2F2" }}>
              <p className="text-sm text-red-600 font-medium">⚠️ This action is immediate and irreversible.</p>
              <p className="text-sm text-red-500 mt-1">
                All your schedules, digests, preferences, and account data are permanently deleted and cannot be recovered.
              </p>
            </div>
          </div>

          {/* Option 2 — Email */}
          <div className="p-8 border-b border-gray-50">
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#17614D" }}>
              Option 2 — Request via email
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you cannot access the app, you can request account deletion by emailing us. We will process your request within 7 business days.
            </p>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#F0FDF4" }}>
              <p className="text-sm font-medium mb-1" style={{ color: "#17614D" }}>Send your request to:</p>
              <a
                href="mailto:nabadailynews@gmail.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20Naba%20Daily%20account.%0A%0AEmail%20address%20associated%20with%20my%20account%3A%20"
                className="text-lg font-semibold"
                style={{ color: "#17614D" }}
              >
                nabadailynews@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Subject: <span className="font-medium text-gray-700">Account Deletion Request</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Please include the email address associated with your Naba Daily account in the body of your email.
              </p>
            </div>
          </div>

          {/* What gets deleted */}
          <div className="p-8 border-b border-gray-50">
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#17614D" }}>
              What gets deleted
            </h2>
            <ul className="space-y-2">
              {[
                "Your account and login credentials",
                "All digest schedules you have created",
                "Your news channel subscriptions and preferences",
                "Your notification settings and language preferences",
                "Your subscription status (cancel your App Store / Google Play subscription separately)",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#34A853" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Subscription note */}
          <div className="p-8">
            <h2 className="text-lg font-semibold mb-3" style={{ color: "#17614D" }}>
              Active subscriptions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Deleting your account does <strong>not</strong> automatically cancel your App Store or Google Play subscription.
              To avoid future charges, cancel your subscription separately before deleting your account:
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="https://apps.apple.com/account/subscriptions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-4 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <p className="font-medium text-sm text-gray-900">🍎 iOS / App Store</p>
                <p className="text-xs text-gray-500 mt-1">Manage at apps.apple.com/account/subscriptions</p>
              </a>
              <a
                href="https://play.google.com/store/account/subscriptions"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-4 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <p className="font-medium text-sm text-gray-900">🤖 Android / Google Play</p>
                <p className="text-xs text-gray-500 mt-1">Manage at play.google.com/store/account/subscriptions</p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Questions?{" "}
            <a href="mailto:nabadailynews@gmail.com" className="font-medium" style={{ color: "#17614D" }}>
              nabadailynews@gmail.com
            </a>
          </p>
          <div className="flex gap-4 justify-center mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
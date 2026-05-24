import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Naba Daily",
  description: "Privacy Policy for Naba Daily",
};

const sections = [
  {
    title: "1. Introduction",
    content: "Naba Daily is committed to protecting your privacy. This policy explains what information we collect, how we use it, and what rights you have. By using the app, you agree to these practices.",
  },
  {
    title: "2. Information We Collect",
    intro: "We collect only what is necessary to provide the service:",
    bullets: [
      "Email address — to create and manage your account.",
      "Display name — shown in your profile.",
      "News digest schedules and preferences you set up in the app.",
      "Subscription status — which plan you are on.",
      "Language and notification preferences.",
      "RSS channels you choose to follow.",
      "Basic usage data to keep the service running smoothly.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    intro: "Your information is used only to provide and improve Naba Daily:",
    bullets: [
      "To authenticate your account and keep it secure.",
      "To deliver your scheduled news digests.",
      "To send push notifications when your digest is ready.",
      "To apply the limits of your subscription plan.",
      "To personalise the app based on your language and notification settings.",
    ],
  },
  {
    title: "4. Third-Party Services",
    intro: "We work with trusted third-party providers to operate the app:",
    subsections: [
      { name: "Google Firebase", detail: "Secure cloud storage and authentication for your account data." },
      { name: "RevenueCat", detail: "Subscription management. Payment processing is handled by Apple App Store or Google Play — Naba Daily never stores your payment details." },
      { name: "AI Summarization", detail: "Article content (not your personal data) is processed by an AI service to generate your digest summaries." },
    ],
  },
  {
    title: "5. Data Security",
    content: "Your data is stored on secure, encrypted cloud infrastructure. Access is restricted so only you can read and modify your own data. Email verification is required to activate your account.",
  },
  {
    title: "6. Data Deletion",
    content: "You can permanently delete your account at any time from Settings → Delete Account. This removes all your data — schedules, digests, preferences, and your account — immediately and irreversibly.",
  },
  {
    title: "7. Your Rights",
    intro: "You have full control over your data:",
    bullets: [
      "View your data at any time within the app.",
      "Update your profile and preferences in Settings.",
      "Delete your account and all associated data at any time.",
      "Turn push notifications on or off at any time.",
    ],
  },
  {
    title: "8. Children",
    content: "Naba Daily is not intended for users under 13. We do not knowingly collect data from children. Contact us if you believe a child has created an account and we will remove it promptly.",
  },
  {
    title: "9. Changes",
    content: "We may update this policy from time to time. We will notify you through the app when significant changes are made. Continued use of Naba Daily after changes means you accept the updated policy.",
  },
  {
    title: "10. Contact",
    content: "Questions about your privacy? Reach us at: support@nabadaily.com",
  },
];

export default function PrivacyPage() {
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
          <Link href="/terms" className="text-sm font-medium" style={{ color: "#17614D" }}>
            Terms of Service →
          </Link>
        </div>
      </header>

      <div style={{ backgroundColor: "#17614D" }} className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm font-medium mb-2 uppercase tracking-wide">Legal</p>
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-green-200">Your data, your control.</p>
          <p className="text-green-300 text-sm mt-4">Last updated: May 9, 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {sections.map((section, i) => (
            <div key={i} className="p-8 border-b border-gray-50 last:border-0">
              <h2 className="text-lg font-semibold mb-3" style={{ color: "#17614D" }}>
                {section.title}
              </h2>
              {section.content && <p className="text-gray-600 leading-relaxed">{section.content}</p>}
              {section.intro && <p className="text-gray-600 leading-relaxed mb-3">{section.intro}</p>}
              {section.bullets && (
                <ul className="space-y-2">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#34A853" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.subsections && (
                <div className="space-y-4">
                  {section.subsections.map((sub, j) => (
                    <div key={j} className="rounded-xl p-4" style={{ backgroundColor: "#F0FDF4" }}>
                      <p className="font-medium text-sm mb-1" style={{ color: "#17614D" }}>{sub.name}</p>
                      <p className="text-gray-600 text-sm">{sub.detail}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Questions?{" "}
            <a href="mailto:support@nabadaily.com" className="font-medium" style={{ color: "#17614D" }}>
              support@nabadaily.com
            </a>
          </p>
          <div className="flex gap-4 justify-center mt-4 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/terms" className="hover:text-gray-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
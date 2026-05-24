import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – Naba Daily",
  description: "Terms of Service for Naba Daily",
};

const sections = [
  {
    title: "1. Acceptance",
    content: "By using Naba Daily, you agree to these Terms of Service. If you do not agree, please do not use the app. We may update these Terms at any time — continued use means acceptance.",
  },
  {
    title: "2. The Service",
    intro: "Naba Daily delivers AI-generated news digests on a schedule you define. You can create digests using three methods:",
    bullets: [
      "Prompt — search for news by topic or keyword.",
      "Prompt + URL — search for news within a specific website.",
      "RSS — subscribe directly to any RSS news feed.",
    ],
    footer: "Digests are generated automatically at your chosen times and delivered as push notifications.",
  },
  {
    title: "3. Your Account",
    bullets: [
      "A valid email address and verification are required to use the service.",
      "You are responsible for keeping your account credentials secure.",
      "You must be at least 13 years old to use Naba Daily.",
      "One account per person. Multiple accounts to bypass plan limits are not allowed.",
      "You are responsible for all activity that takes place under your account.",
    ],
  },
  {
    title: "4. Subscription Plans",
    intro: "Naba Daily offers three plans:",
    plans: [
      { name: "Free", schedules: 2, channels: 150, price: "$0" },
      { name: "Naba", schedules: 7, channels: 3000, price: "$4.99/mo" },
      { name: "Naba Pro+", schedules: 15, channels: 5000, price: "$9.99/mo" },
    ],
    footer: "Subscriptions are billed through the App Store or Google Play and renew automatically unless cancelled at least 24 hours before the renewal date.",
  },
  {
    title: "5. Plan Limits",
    content: "Your active schedule and channel counts are limited by your plan. If you downgrade, schedules over the new limit are paused — not deleted. You can delete them to stay within your plan.",
  },
  {
    title: "6. Acceptable Use",
    intro: "You agree not to:",
    bullets: [
      "Use the app for any unlawful purpose.",
      "Republish or resell AI-generated digest content commercially.",
      "Attempt to reverse-engineer or tamper with the app.",
      "Use bots or automation to create accounts or schedules.",
      "Submit content designed to generate harmful or misleading output.",
      "Interfere with the service or other users' access.",
    ],
  },
  {
    title: "7. AI Content Disclaimer",
    content: "Digest summaries are generated automatically by AI from publicly available news sources. We do not guarantee their accuracy or completeness. Always verify important information from primary sources.",
  },
  {
    title: "8. Account Deletion",
    content: "You can delete your account at any time from Settings → Delete Account. All your data is removed immediately and cannot be recovered. Cancel any active subscription separately through the App Store or Google Play.",
  },
  {
    title: "9. Liability",
    content: "To the extent permitted by law, Naba Daily's liability for any claim is limited to the amount you paid in the 3 months preceding the claim. We are not liable for indirect or consequential damages.",
  },
  {
    title: "10. Contact",
    content: "Questions about these Terms? support@nabadaily.com",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#17614D" }}>
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-gray-900">Naba Daily</span>
          </Link>
          <Link href="/privacy" className="text-sm font-medium" style={{ color: "#17614D" }}>
            Privacy Policy →
          </Link>
        </div>
      </header>

      <div style={{ backgroundColor: "#17614D" }} className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm font-medium mb-2 uppercase tracking-wide">Legal</p>
          <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-green-200">Please read before using Naba Daily.</p>
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
                <ul className="space-y-2 mb-3">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#34A853" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.plans && (
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {section.plans.map((plan, j) => (
                    <div key={j} className="rounded-xl p-4 text-center border"
                      style={{ borderColor: j === 1 ? "#17614D" : "#E5E7EB", backgroundColor: j === 1 ? "#F0FDF4" : "#FAFAFA" }}>
                      <p className="font-semibold text-sm mb-1" style={{ color: j === 1 ? "#17614D" : "#374151" }}>{plan.name}</p>
                      <p className="text-2xl font-bold text-gray-900 mb-1">{plan.price}</p>
                      <p className="text-xs text-gray-400">{plan.schedules} schedules</p>
                      <p className="text-xs text-gray-400">{plan.channels.toLocaleString()} channels</p>
                    </div>
                  ))}
                </div>
              )}
              {section.footer && <p className="text-gray-500 text-sm mt-2">{section.footer}</p>}
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
            <Link href="/privacy" className="hover:text-gray-600">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
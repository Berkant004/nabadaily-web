import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – Naba Daily",
  description: "Contact YXL Technology, the developer of Naba Daily.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/app_icon.png" alt="Naba Daily" width={32} height={32} className="rounded-xl" />
            <span className="font-semibold text-gray-900">Naba Daily</span>
          </Link>
        </div>
      </header>

      <div style={{ backgroundColor: "#17614D" }} className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-green-300 text-sm font-medium mb-2 uppercase tracking-wide">Contact</p>
          <h1 className="text-3xl font-bold text-white mb-2">Get in Touch</h1>
          <p className="text-green-200">We'd love to hear from you.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#17614D" }}>YXL Technology</h2>
          <p className="text-gray-600 mb-6">Developer of Naba Daily</p>
          <div className="space-y-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: "#F0FDF4" }}>
              <p className="text-sm font-medium mb-1" style={{ color: "#17614D" }}>Email</p>
              <a href="mailto:nabadailynews@gmail.com" className="text-gray-700 font-medium">
                nabadailynews@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center flex gap-4 justify-center text-sm text-gray-400">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
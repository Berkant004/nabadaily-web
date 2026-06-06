import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Image
            src="/app_icon.png"
            alt="Naba Daily"
            width={44}
            height={44}
            className="rounded-2xl shadow-sm"
          />
          <span className="text-2xl font-bold text-gray-900">Naba Daily</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Stay informed.<br />
          <span style={{color: '#17614D'}}>Stay ahead.</span>
        </h1>
        <p className="text-gray-500 text-lg mb-10">
          AI-powered personalized news digests delivered on your schedule.
        </p>
        <div className="flex gap-6 justify-center text-sm text-gray-400">
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-600 transition-colors">
            Terms of Service
          </Link>
          <Link href="/delete-account" className="hover:text-gray-600 transition-colors">
            Delete Account
          </Link>
        </div>
      </div>
    </main>
  );
}
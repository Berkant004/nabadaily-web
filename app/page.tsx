import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{backgroundColor: '#17614D'}}>
            <span className="text-white font-bold text-lg">N</span>
          </div>
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
        </div>
      </div>
    </main>
  );
}
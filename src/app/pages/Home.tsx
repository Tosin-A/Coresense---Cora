import { MessageCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Layout>
      <div className="flex items-center justify-center px-8 pb-32 flex-1">
        <div className="max-w-3xl text-center space-y-8">
          <h2 className="text-6xl md:text-7xl">
            Cora wants you to
            <br />
            <span className="italic">lock in</span>. Do you?
          </h2>

          <p className="text-xl text-gray-400">It all starts with one text.</p>

          <div className="flex flex-col items-center gap-3">
            <Link to="/about">
              <button 
                className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-all text-lg group relative"
                style={{
                  boxShadow: '0 0 30px rgba(63, 16, 106, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), 0 0 90px rgba(168, 85, 247, 0.2)',
                  border: '2px solid rgba(168, 85, 247, 0.3)',
                }}
              >
                <MessageCircle className="w-5 h-5 text-green-500" strokeWidth={2.5} />
                Get Started Now
              </button>
            </Link>
            <p className="text-xs text-gray-500">
              By continuing, you agree to our Terms and Privacy.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
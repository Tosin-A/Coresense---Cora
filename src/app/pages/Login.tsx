import { Layout } from '../components/Layout';
import { Lock, Mail } from 'lucide-react';

export function Login() {
  return (
    <Layout>
      <div className="flex items-center justify-center px-8 py-16 flex-1">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl">Welcome Back</h1>
            <p className="text-xl text-gray-400">Log in to continue your journey</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-400">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-400">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-white/10" />
                  <span className="text-gray-400">Remember me</span>
                </label>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Log In
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                Sign up
              </a>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                Google
              </button>
              <button className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition-colors">
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

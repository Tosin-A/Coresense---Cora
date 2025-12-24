import { Layout } from '../components/Layout';
import { Target, Zap, Users, Heart } from 'lucide-react';

export function About() {
  return (
    <Layout>
      <div className="flex items-center justify-center px-8 py-16 flex-1">
        <div className="max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl">About Cora</h1>
            <p className="text-xl text-gray-400">Your personal accountability partner</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
              <Target className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl mb-3">Our Mission</h3>
              <p className="text-gray-400">
                We help people stay committed to their fitness goals through daily accountability and community support.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
              <Zap className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl mb-3">How It Works</h3>
              <p className="text-gray-400">
                Daily check-ins, progress tracking, and a supportive community to keep you motivated every step of the way.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
              <Users className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl mb-3">Community</h3>
              <p className="text-gray-400">
                Join thousands of people who are crushing their fitness goals together, one workout at a time.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
              <Heart className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl mb-3">Our Values</h3>
              <p className="text-gray-400">
                Consistency over perfection. Progress over excuses. Community over competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

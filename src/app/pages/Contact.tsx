import { Layout } from '../components/Layout';
import { Mail, MessageCircle, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <Layout>
      <div className="flex items-center justify-center px-8 py-16 flex-1">
        <div className="max-w-2xl w-full space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl">Get in Touch</h1>
            <p className="text-xl text-gray-400">We'd love to hear from you</p>
          </div>

          <div className="grid gap-6">
            <a
              href="mailto:hello@cora.fit"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 group"
            >
              <Mail className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl mb-1">Email Us</h3>
                <p className="text-gray-400">hello@cora.fit</p>
              </div>
            </a>

            <a
              href="#"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 group"
            >
              <MessageCircle className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl mb-1">Live Chat</h3>
                <p className="text-gray-400">Available 9AM-5PM EST</p>
              </div>
            </a>

            <a
              href="#"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-4 group"
            >
              <Twitter className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="text-xl mb-1">Follow Us</h3>
                <p className="text-gray-400">@CoraFitness</p>
              </div>
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-gray-400">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-400">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 text-gray-400">Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  rows={4}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

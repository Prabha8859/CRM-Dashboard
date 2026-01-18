import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, LayoutDashboard } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#055b65] via-[#03454d] to-[#022c33] p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#1bd488]/10 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#45828b]/20 blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1bd488] to-[#45828b] mb-4 shadow-lg shadow-[#1bd488]/30">
              <LayoutDashboard className="text-[#055b65]" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-[#fbfcfc] mb-2">Welcome Back</h1>
            <p className="text-[#b2c9c5]">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#e0e5e9] ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-[#b2c9c5] group-focus-within:text-[#1bd488] transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-[#b2c9c5]/50 focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 focus:border-transparent transition-all"
                  placeholder="admin@crm.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-[#e0e5e9]">Password</label>
                <a href="#" className="text-xs text-[#b2c9c5] hover:text-[#1bd488] transition-colors">Forgot password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#b2c9c5] group-focus-within:text-[#1bd488] transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder-[#b2c9c5]/50 focus:outline-none focus:ring-2 focus:ring-[#1bd488]/50 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#1bd488] to-[#45828b] hover:from-[#1bd488]/90 hover:to-[#45828b]/90 text-[#055b65] font-bold py-3.5 rounded-xl shadow-lg shadow-[#1bd488]/30 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              {!isLoading && <ArrowRight size={20} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
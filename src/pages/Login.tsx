import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import welcomeImg from "@/assets/welcome.jpg";
import whiteLogo from "@/assets/white-logo.png";
import googleIcon from "@/assets/google.png";
import appleIcon from "@/assets/apple.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = await login(email, password);
    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="h-screen w-screen bg-white flex overflow-hidden">
      <div className="w-full h-full overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_minmax(0,1.4fr)]">
        <div className="relative hidden md:block min-h-screen z-0 md:-mr-16 lg:-mr-24 xl:-mr-32">
          <img src={welcomeImg} alt="Welcome" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#66BDE1]/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <img src={whiteLogo} alt="Skyview Homes Realty" className="w-[200px] sm:w-[240px]" />
          </div>
        </div>

        <div className="relative z-10 w-full h-screen overflow-y-auto p-6 sm:p-8 md:p-10 px-8 sm:px-12 md:px-16 flex flex-col justify-center bg-white rounded-bl-[3rem] md:rounded-l-[3rem] md:ml-0 lg:ml-0 xl:ml-0 md:shadow-xl overflow-x-hidden">
          <h1 className="text-2xl font-semibold text-center text-foreground mb-6">Login</h1>

          <form onSubmit={handleSubmit} className="space-y-4 px-6">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Email or Username</label>
              <Input
                className="h-10 rounded-md border border-[#57B6E0]"
                placeholder="Sarah Doe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1">Password</label>
              <Input
                type="password"
                className="h-10 rounded-md border border-[#57B6E0]"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="accent-[#63BDE2]" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-[#0034AB] hover:underline">
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="w-full h-10 rounded-full bg-[#63BDE2] hover:bg-[#58b3db] text-white text-sm font-semibold">
              Login
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Do not have an account?{" "}
              <Link to="/signup" className="text-[#0034AB] font-semibold hover:underline">
                Sign in
              </Link>
            </p>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex-1 h-px bg-border" />
              OR
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 px-6">
              <button type="button" className="flex items-center justify-center gap-3 h-16 border border-black/10 rounded-md text-sm font-semibold text-foreground hover:bg-muted whitespace-nowrap">
                <img src={googleIcon} alt="Google" className="w-6 h-6" />
                Continue with Google
              </button>
              <button type="button" className="flex items-center justify-center gap-3 h-16 border border-black/10 rounded-md text-sm font-semibold text-foreground hover:bg-muted">
                <img src={appleIcon} alt="Apple" className="w-6 h-6" />
                Continue with Apple
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

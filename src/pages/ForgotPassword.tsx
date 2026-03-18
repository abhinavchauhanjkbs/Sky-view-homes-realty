import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import welcomeImg from "@/assets/welcome.jpg";
import whiteLogo from "@/assets/white-logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulate password reset API call
    if (email && newPassword) {
      // Show success notification
      toast.success("New password is created");
      
      // Wait a moment then navigate back to login
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
      setError("Please fill in all fields");
    }
  };

  const handleCancel = () => {
    navigate("/login");
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
          <h1 className="text-2xl font-semibold text-center text-foreground mb-8">
            Forgot Your Password?
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Email
              </label>
              <Input
                type="email"
                className="w-full h-12 rounded-lg border border-[#57B6E0] focus:border-[#57B6E0] focus:ring-[#57B6E0]"
                placeholder="Sarah Doe123@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                New Password
              </label>
              <Input
                type="password"
                className="w-full h-12 rounded-lg border border-[#57B6E0] focus:border-[#57B6E0] focus:ring-[#57B6E0]"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                className="w-full h-12 rounded-lg border border-[#57B6E0] focus:border-[#57B6E0] focus:ring-[#57B6E0]"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 h-12 rounded-full bg-[#57B6E0] hover:bg-[#4a9fcc] text-white font-semibold"
              >
                Continue
              </Button>
              <Button
                type="button"
                onClick={handleCancel}
                className="flex-1 h-12 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-semibold border border-[#57B6E0]"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import studentBoy from "@/assets/student-boy.png";
import studentGirl from "@/assets/student-girl.png";

type Role = "student" | "teacher";
type Mode = "login" | "signup";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("login");
  const [role, setRole] = useState<Role>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;

        if (data.user) {
          // Insert role
          const { error: roleError } = await supabase
            .from("user_roles")
            .insert({ user_id: data.user.id, role });
          if (roleError) console.error("Role insert error:", roleError);
        }

        toast.success("Check your email to confirm your account!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Logged in successfully!");
        navigate("/");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute top-10 left-10 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-light-purple/40 rounded-full blur-3xl" />
        <div className="text-center z-10">
          <img
            src={role === "student" ? studentBoy : studentGirl}
            alt={role === "student" ? "Student boy" : "Teacher girl"}
            className="w-72 h-72 object-contain mx-auto drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold text-primary-foreground mt-6">
            {role === "student" ? "Start Learning Today!" : "Inspire Young Minds!"}
          </h2>
          <p className="text-primary-foreground/80 mt-2 text-sm max-w-xs mx-auto">
            {role === "student"
              ? "Join thousands of kids learning new skills everyday"
              : "Share your expertise and teach the next generation"}
          </p>
        </div>
      </div>

      {/* Right side - form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-foreground mb-1">
            {mode === "login" ? "Welcome Back!" : "Create Account"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {mode === "login" ? "Sign in to continue learning" : "Join LearnHub as a student or teacher"}
          </p>

          {/* Role selector */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setRole("student")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all font-medium text-sm ${
                role === "student"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50"
              }`}
            >
              🎓 Student
            </button>
            <button
              onClick={() => setRole("teacher")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all font-medium text-sm ${
                role === "teacher"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50"
              }`}
            >
              👩‍🏫 Teacher
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name</label>
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full rounded-full" size="lg" disabled={loading}>
              {loading ? "Please wait..." : mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="text-primary font-semibold hover:underline"
            >
              {mode === "login" ? "Sign Up" : "Sign In"}
            </button>
          </p>

          <button
            onClick={() => navigate("/")}
            className="block text-center text-sm text-muted-foreground mt-4 hover:text-foreground transition-colors mx-auto"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

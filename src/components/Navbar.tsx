import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <span
            className="text-xl font-bold text-foreground cursor-pointer"
            onClick={() => navigate("/")}
          >
            Learn<span className="text-primary">Hub</span>
          </span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-primary underline underline-offset-4">
              Courses
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Teachers
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Categories
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/auth")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="bg-accent text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:brightness-105 transition-all"
          >
            Register for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

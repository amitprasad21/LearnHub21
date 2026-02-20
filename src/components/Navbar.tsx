import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="border-b border-border bg-secondary/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-8">
          <span
            className="cursor-pointer text-xs font-bold text-foreground md:text-sm"
            onClick={() => navigate("/")}
          >
            Logo
          </span>
          <a
            href="#"
            className="text-[11px] font-medium text-primary underline underline-offset-4 md:text-xs"
          >
            Course
          </a>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => navigate("/auth")}
            className="text-[10px] font-medium text-foreground transition-colors hover:text-primary md:text-xs"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/auth")}
            className="rounded-full bg-primary px-3 py-1 text-[9px] font-semibold text-primary-foreground transition-all hover:brightness-105 md:px-4 md:py-1.5 md:text-[11px]"
          >
            Register for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-primary-foreground md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Learn<span className="text-accent">Hub</span>
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              Empowering young minds with skills for the future. Learn anytime, anywhere.
            </p>
            <div className="mt-5 flex w-full max-w-sm items-center overflow-hidden rounded-full border border-primary-foreground/25 bg-primary-foreground/10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/60 outline-none"
              />
              <button className="m-1 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="transition-opacity hover:opacity-100">All Courses</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Teachers</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Categories</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Webinars</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="transition-opacity hover:opacity-100">Help Center</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Contact Us</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="transition-opacity hover:opacity-100">Privacy Policy</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Terms of Service</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-100">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/20 pt-6 text-center md:flex-row">
          <p className="text-xs text-primary-foreground/60">© 2026 LearnHub. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/50">Made for curious young learners ✨</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

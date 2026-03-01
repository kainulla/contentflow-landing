export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; 2026 ContentFlow</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

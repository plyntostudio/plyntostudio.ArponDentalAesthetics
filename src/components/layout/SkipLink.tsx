export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        fixed left-4 top-4 z-[100]
        -translate-y-full focus:translate-y-0
        bg-accent text-white
        px-4 py-2 rounded-[6px]
        text-sm font-medium
        transition-transform duration-200 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent
      "
    >
      Skip to main content
    </a>
  );
}

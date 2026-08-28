/** Minimal footer — only the copyright line, per the Version 1.0 brief. */
export default function MinimalFooter() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-20">
      <div className="px-6 pb-5 pt-2 text-center sm:pb-6">
        <p className="font-sans text-[0.65rem] tracking-[0.25em] text-white/55 sm:text-[0.7rem]">
          © PLIRIS GLOBAL TRAVEL
        </p>
      </div>
    </footer>
  );
}

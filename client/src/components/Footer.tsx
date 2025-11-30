export function Footer() {
  return (
    <footer className="bg-primary py-8 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Bill Boaz Kogembo. All rights reserved.
        </p>
        <p className="text-white/30 text-xs mt-2">
          Designed for Professional Excellence.
        </p>
      </div>
    </footer>
  );
}

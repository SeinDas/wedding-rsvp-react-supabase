import { Heart } from 'lucide-react';

export function PageFooter() {
  return (
    <footer className="py-12 px-4 bg-rose-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <Heart className="w-8 h-8 mx-auto mb-4 fill-white" />
        <p className="text-lg mb-2">Emma & James</p>
        <p className="text-sm opacity-80">June 15, 2026 • Santa Barbara, California</p>
        <div className="mt-6 pt-6 border-t border-rose-700">
          <p className="text-xs opacity-70">
            We can't wait to celebrate with you!
          </p>
        </div>
      </div>
    </footer>
  );
}

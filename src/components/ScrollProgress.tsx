import { useScrollProgress } from '../hooks/useParallax';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left transition-transform"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}

import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setAtBottom(scrollTop + windowHeight >= docHeight - 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hide when reached bottom
  if (atBottom) return null;

  return (
    <div className="fixed bottom-6 w-full text-center text-gray-500 text-sm animate-bounce pointer-events-none">
      scroll ↓
    </div>
  );
}

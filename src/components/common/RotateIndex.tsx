import { useEffect, useState } from "react";

const useRotateIndex = (length: number, delay = 3000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  return index;
};

export default useRotateIndex;

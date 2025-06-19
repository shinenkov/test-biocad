import { useEffect, useState } from 'react';

function usePartSize() {
  const [partSize, setPartSize] = useState(12);

  useEffect(() => {
    function updateSize() {
      if (window.innerWidth < 320) setPartSize(6);
      else setPartSize(Math.floor(window.innerWidth / 23));
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return partSize;
}

export default usePartSize;

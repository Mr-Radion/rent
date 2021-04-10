/* eslint-disable func-names */
/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';

export function useHover(ref) {
  const [isHovering, setHovering] = useState<boolean>(false);

  const on = () => setHovering(true);
  const off = () => setHovering(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const node = ref.current;

    node.addEventListener('mouseenter', on);
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);

    // actions when dismantling a component via a function
    return function () {
      node.removeEventListener('mouseenter', on);
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
    };
  }, []);

  return isHovering;
}

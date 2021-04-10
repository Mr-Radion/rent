import { useEffect, useRef } from 'react';

export function useScroll(parentRef, childRef, callback) {
  // Observer
  const observer = useRef();
  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0,
    };
    // callback that will be triggered when it appears in sight
    // @ts-ignore
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('intersected');
        callback();
      }
    }, options);
    // which element to follow
    // @ts-ignore
    observer.current.observe(childRef.current);

    // we remove surveillance when dismantling
    return function () {
      // @ts-ignore
      observer.current.unobserve(childRef.current);
    };
  }, [callback]);
}

import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

export type UsePortalProps = {
  onClose: any;
  refCurrent: any;
};

// Unlike useOnclickoutside, the element is globally embedded in the document to display on top of all other content.

export const UsePortal: React.FC<UsePortalProps> = ({ children, refCurrent, onClose }) => {
  if (process.browser) {
    const el: any = useMemo(() => document.createElement('div'), []);
    useEffect(() => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!refCurrent.current || refCurrent.current.contains(event.target)) {
          return;
        }

        onClose(event);
      };
      document.body.style.overflowY = 'hidden';
      document.body.appendChild(el);
      document.addEventListener('mousedown', listener);
      return () => {
        document.body.style.overflowY = 'scroll';
        document.removeEventListener('mousedown', listener);
        document.body.removeChild(el);
      };
    }, [el]);
    return createPortal(children, el);
  }
  return null;
};

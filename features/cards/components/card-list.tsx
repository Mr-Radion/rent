import React from 'react';
import shortid from 'shortid';
// import { useScroll } from '../../../lib/custom-hooks';

export const CardsList = (): any =>
  // { page, limit, items, onClickFetchCards }
  {
    const parentRef = React.useRef();
    const childRef = React.useRef();
    // const intersected = useScroll(parentRef, childRef, () => fetchCards(page, limit));
    const item: any = [1, 2, 3, 4, 5];

    // function fetchCards(page, limit) {
    //   onClickFetchCards();
    // }

    return (
      <div ref={parentRef}>
        {item && item.map(elem => <div key={shortid.generate()}>{elem}</div>)}
        <div ref={childRef} style={{ height: '20px', background: 'green' }} />
      </div>
    );
  };

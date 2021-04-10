// import React from 'react';
import { useDispatch } from 'react-redux';

export const useDispatcher =
  // React.memo(
  (data, actionCreator): void => {
    const dispatch = useDispatch();
    dispatch(actionCreator(data));
  };
// );

// export const useDispatchCall = function (data, actionCreator) {
//   return React.useCallback((dataItem, actionCreatorItem) => {
//     const dispatch = useDispatch();
//     dispatch(actionCreatorItem(dataItem));
//   }, []);
// };

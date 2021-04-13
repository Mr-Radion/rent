import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { ButtonPrimary, Input } from '../../../ui';

export const SearchRun = () => {
  const router = useRouter();
  const {
    filterLocationBy,
    filterTypePropertyBy,
    filterPriceBy,
    filterBedroomsCounterBy,
    filterBedroomsTypeBy,
    filterSquareBy,
  } = useSelector(({ filters }: any) => filters);

  const [searchQuery, setSearchQuery] = React.useState<any>('');

  const handleInputChange = React.useCallback(({ target: { value } }) => {
    setSearchQuery(value);
  }, []);

  const q = searchQuery.length !== 0 ? `&q=${searchQuery}` : '';

  const locationRoute =
    filterLocationBy.length !== 0
      ? `?location=${String(filterLocationBy).toLowerCase()}`
      : 'all cities';
  const typePropertyRoute =
    filterTypePropertyBy.length !== 0
      ? `&typeProperty=${String(filterTypePropertyBy).toLowerCase()}`
      : '';
  const minprice = filterPriceBy.from ? `&minprice=${filterPriceBy.from}` : '';
  const maxprice = filterPriceBy.to ? `&maxprice=${filterPriceBy.to}` : '';
  const minsquare = filterSquareBy.from ? `&minsquare=${filterSquareBy.from}` : '';
  const maxsquare = filterSquareBy.to ? `&maxsquare=${filterSquareBy.to}` : '';
  const room1 = filterBedroomsCounterBy.includes(1) ? '&room1=1' : '';
  const room2 =
    filterBedroomsCounterBy.includes(2) ||
    (filterBedroomsCounterBy.length > 1 &&
      filterBedroomsCounterBy[filterBedroomsCounterBy.length - 1] > 2 &&
      filterBedroomsCounterBy[0] < 2)
      ? '&room2=1'
      : '';
  const room3 =
    filterBedroomsCounterBy.includes(3) ||
    (filterBedroomsCounterBy.length > 1 &&
      filterBedroomsCounterBy[filterBedroomsCounterBy.length - 1] > 3 &&
      filterBedroomsCounterBy[0] < 3)
      ? '&room3=1'
      : '';
  const room4 =
    filterBedroomsCounterBy.includes(4) ||
    (filterBedroomsCounterBy.length > 1 &&
      filterBedroomsCounterBy[filterBedroomsCounterBy.length - 1] > 3 &&
      filterBedroomsCounterBy[0] < 3)
      ? '&room4=1'
      : '';
  const room5 = filterBedroomsCounterBy.includes(5) ? '&room5=1' : '';
  const bedroomsType =
    filterBedroomsTypeBy.length !== 0
      ? `&bedroomsType=${filterBedroomsTypeBy[0].toLowerCase()}`
      : '';

  const httpQuery = `${typePropertyRoute && locationRoute}${
    typePropertyRoute && typePropertyRoute
  }${minprice && minprice}${maxprice && maxprice}${room1 && room1}${room2 && room2}${
    room3 && room3
  }${room4 && room4}${room5 && room5}${bedroomsType && bedroomsType}${minsquare && minsquare}${
    maxsquare && maxsquare
  }${q && q}`;

  const onClickSearch = () => {
    router.push({
      pathname: '/search',
      search: `${httpQuery}`,
    });
  };

  return (
    <>
      {router.pathname !== '/' && (
        <Input
          width="620px"
          margin="0 16px 0 0"
          type="text"
          placeholder="Enter ID or Property title here..."
          height="38px"
          onChange={e => handleInputChange(e)}
          value={searchQuery}
        />
      )}
      <ButtonPrimary
        fontSize="18px"
        // width="9.5rem"
        minWidth="152px"
        height="3.314rem"
        color="#F1F1F2"
        background="linear-gradient(70.2deg, #00A9B0 0%, #76DFC7 100%)"
        onClick={onClickSearch}
        fontWeight="bold"
        radius="4px"
      >
        Search
      </ButtonPrimary>
    </>
  );
};

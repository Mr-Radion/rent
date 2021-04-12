import type { NextApiRequest, NextApiResponse } from 'next';
import { search_result } from '../../lib/mock-data/db.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;

  const adName = p => (body?.q ? p?.ad_name.trim() === body?.q.trim() : true);
  const locationDistrict = p =>
    body?.location && body?.location !== 'all cities'
      ? p?.location.district === body?.location
      : true;
  const typeProperty = p => (body?.typeProperty ? p?.type_property === body?.typeProperty : true);
  const price = p => {
    if (body?.minprice && !body?.maxprice) {
      console.log('Первое');
      return p?.price >= body?.minprice;
    }
    if (body?.maxprice && !body?.minprice) {
      console.log('Второе');
      return p?.price <= body?.maxprice;
    }
    if (body?.maxprice && body?.maxprice) {
      console.log('Третье');
      return p?.price >= body?.minprice && p?.price <= body?.maxprice;
    }
    return true;
  };
  // const price = p => {
  //   if (body?.minprice && !body?.maxprice) {
  //     // console.log(!body?.minprice);
  //     return p?.price >= body?.minprice;
  //   }
  //   return true;
  // };
  const square = p =>
    body?.minsquare || body?.maxsquare
      ? p?.square >= body?.minsquare && p?.square <= body?.maxsquare
      : true;
  const filterRoom1 = search_result.filter(p =>
    body?.room1 ? p?.room1 === Number(body?.room1) : false,
  );
  const filterRoom2 = search_result.filter(p =>
    body?.room2 ? p?.room2 === Number(body?.room2) : false,
  );
  const filterRoom3 = search_result.filter(p =>
    body?.room3 ? p?.room3 === Number(body?.room3) : false,
  );
  const filterRoom4 = search_result.filter(p =>
    body?.room4 ? p?.room4 === Number(body?.room4) : false,
  );
  const filterRoom5 = search_result.filter(p => (body?.room5 ? p?.bedrooms >= 5 : false));

  const bedroomsSummation = [
    ...filterRoom1,
    ...filterRoom2,
    ...filterRoom3,
    ...filterRoom4,
    ...filterRoom5,
  ];

  function unique(arr) {
    return Array.from(new Set(arr));
  }
  const bedroomsFiltered = unique(bedroomsSummation);

  // console.log(filterRoom5);
  const bedroomsType = p =>
    body?.bedroomsType
      ? p?.type_bedrooms >= body?.bedroomsType[0].toUpperCase() + body?.bedroomsType.slice(1)
      : true;

  const filtered = bedroomsFiltered.filter(p => {
    // console.log(price(p));
    return (
      adName(p) &&
      locationDistrict(p) &&
      price(p) &&
      typeProperty(p) &&
      bedroomsType(p) &&
      square(p)
    );
  });

  // Todo
  // Прайсы и площади не работают в том состоянии, котором они сейчас находятся, исправить алгоритм по их фильтру и по площадям
  // Если указано значение только от или только до учесть для прайса и площадей.

  switch (method) {
    case 'POST':
      if (filtered.length > 0) {
        res.status(200).json({ results: bedroomsFiltered });
      } else {
        res.status(404).json({ message: 'Search results: not found.' });
      }
      break;

    default:
      break;
  }
};

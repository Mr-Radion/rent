import type { NextApiRequest, NextApiResponse } from 'next';
import { search_result } from '../../lib/mock-data/db.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;

  // console.log(body);
  const adName = p => (body?.q ? p?.ad_name === body?.q.trim() : true);
  const locationDistrict = p =>
    body?.location && body?.location !== 'all cities'
      ? p?.location.district === body?.location.trim()
      : true;
  const typeProperty = p =>
    body?.typeProperty ? p?.type_property === body?.typeProperty.trim() : true;
  const price = p =>
    body?.minprice || body?.maxprice
      ? p?.price >= body?.minprice.trim() && p?.price <= body?.maxprice.trim()
      : true;
  const room1 = p => (body?.room1 ? p?.bedrooms === Number(body?.room1) : true);
  const room2 = p => (body?.room2 ? p?.bedrooms === Number(body?.room2) : true);
  const room3 = p => (body?.room3 ? p?.bedrooms === Number(body?.room3) : true);
  const room4 = p => (body?.room4 ? p?.bedrooms === Number(body?.room4) : true);
  const room5 = p => (body?.room5 ? p?.bedrooms >= Number(body?.room5) : true);
  const bedroomsType = p =>
    body?.bedroomsType
      ? p?.type_bedrooms >= body?.bedroomsType[0].toUpperCase() + body?.bedroomsType.slice(1)
      : true;

  const filtered = search_result.filter(p => {
    // console.log(room3(p));
    return (
      adName(p) &&
      locationDistrict(p) &&
      price(p) &&
      typeProperty(p) &&
      bedroomsType(p) &&
      room1(p) &&
      room2(p) &&
      room3(p) &&
      room4(p) &&
      room5(p)
    );
  });

  // Todo
  // - сделать возможность выбирать несколько вариантов комнат включительно, а не сужая

  switch (method) {
    case 'POST':
      if (filtered.length > 0) {
        res.status(200).json({ results: filtered });
      } else {
        res.status(404).json({ message: 'Search results: not found.' });
      }
      break;

    default:
      break;
  }
};

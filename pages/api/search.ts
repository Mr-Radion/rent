import type { NextApiRequest, NextApiResponse } from 'next';
import { search_result } from '../../lib/mock-data/db.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req;

  const adName = p => (body?.q ? p?.ad_name === body?.q.trim() : true);
  // console.log(body);
  const locationDistrict = p =>
    body?.location ? p?.location.district === body?.location.trim() : true;
  const typeProperty = p =>
    body?.typeProperty ? p?.type_property === body?.typeProperty.trim() : true;
  const bedrooms = p => (body?.bedrooms ? p?.bedrooms === body?.bedrooms.trim() : true);
  const price = p =>
    body?.minprice || body?.maxprice
      ? p?.price >= body?.minprice.trim() && p?.price <= body?.maxprice.trim()
      : true;

  const filtered = search_result.filter(
    p => adName(p) && locationDistrict(p) && bedrooms(p) && price(p) && typeProperty(p),
  );

  // Todo
  // Сделать фильтр для прайса от и до, минпрайс и макспрайс +
  // Сделать фильтр для количества комнат фиксировано одно, фиксированно несколько, или от и до, в циане так &room1=1&room2=1&room3=1

  switch (method) {
    case 'POST':
      if (filtered.length > 0) {
        res.status(200).json({ results: filtered });
      } else {
        res.status(404).json({ message: `Search results: ${body.q && body.q.trim()} not found.` });
      }
      break;

    default:
      break;
  }
};

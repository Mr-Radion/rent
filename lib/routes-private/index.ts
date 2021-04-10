import { useRouter } from 'next/router';
// import { token } from '../../features/authenticate-form/lib';

const authenticatedRoutesPrivate: any =
  '/my-profile' || '/favorites' || '/my-wallet' || '/myads' || '/notifications';
// const router = () => useRouter();
export const blockRoutes = () => useRouter().pathname === authenticatedRoutesPrivate && !'token';

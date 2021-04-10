/* eslint-disable @typescript-eslint/no-unused-vars */
// import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import PageNotFound from './404';
// import { token } from '../features/authenticate-form/lib';
import { Header, Footer, CenterContent, navMainData, MainNav } from '../features/common';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';
import { MainTemplate } from '../ui';

function MyAdsPage({ token }): JSX.Element {
  if (!token) {
    return <PageNotFound />;
  }
  // @ts-ignore
  const [ads, setAds] = React.useState<any>([
    { id: 1, name: 'Двухкомнатная квартира' },
    { id: 2, name: 'Шалаш' },
    { id: 3, name: 'Машина на колесах' },
  ]);

  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} token={token} />}
      footer={
        <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
      }
    >
      <CenterContent mainNavItem={<MainNav mainNavList={navMainData} />}>
        <div>
          <h1>Список объявлений</h1>
          {ads.map(ad => (
            <>
              <li key={ad.id}>
                <Link href={`/myad/${ad.id}`}>
                  <a target="_blank">{ad.name}</a>
                </Link>
              </li>
            </>
          ))}
        </div>
      </CenterContent>
    </MainTemplate>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default MyAdsPage;

// import styled from 'styled-components';
import React from 'react';
import PageNotFound from './404';
// import { token } from '../features/authenticate-form/lib';
import { Header, Footer, CenterContent, navMainData, MainNav } from '../features/common';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';
import { MainTemplate } from '../ui';

function MyWalletPage({ token }): JSX.Element {
  const [tokenT, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/auth')
      .then(response => response.json())
      .then(res => setToken(res.success));
  }, []);

  if (!token && !tokenT) {
    return <PageNotFound />;
  }
  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} token={token || !tokenT} />}
      footer={
        <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
      }
    >
      <CenterContent mainNavItem={<MainNav mainNavList={navMainData} />}>
        <div>Мой кошелек</div>
      </CenterContent>
    </MainTemplate>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default MyWalletPage;

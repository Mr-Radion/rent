// import styled from 'styled-components';
import PageNotFound from './404';
// import { token } from '../features/authenticate-form/lib';
import { Header, Footer, CenterContent, navMainData, MainNav } from '../features/common';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';
import { MainTemplate } from '../ui';

function MyWalletPage({ token }): JSX.Element {
  if (!token) {
    return <PageNotFound />;
  }
  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} />}
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

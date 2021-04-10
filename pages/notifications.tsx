// import styled from 'styled-components';
import { Header, Footer, CenterContent, navMainData, MainNav } from '../features/common';
import PageNotFound from './404';
// import { token } from '../features/authenticate-form/lib';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';
import { MainTemplate } from '../ui';

function NotificationsPage({ token }): JSX.Element {
  if (!token) {
    return <PageNotFound />;
  }
  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} token={token} />}
      footer={
        <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
      }
    >
      <CenterContent mainNavItem={<MainNav mainNavList={navMainData} />}>
        <div>Уведомления</div>
      </CenterContent>
    </MainTemplate>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default NotificationsPage;

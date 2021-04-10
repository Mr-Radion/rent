import styled from 'styled-components';
import { Header, Footer, CenterContent, navMainData, MainNav } from '../features/common';
import PageNotFound from './404';
import { MainTemplate, ButtonPrimary, CheckboxCustom, CheckOnBasic } from '../ui';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';

const FavoritesHead = styled.div`
  display: flex;
  height: 108px;
`;

const FavoritesWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 53px 130px 0 56px;
`;

const FavCard = styled.div`
  display: flex;
  padding: 44px 0 20px 0;
  .img {
    width: 316px;
    height: 316px;
    background: #000;
    margin: 0 30px 0 50px;
  }
  .desc {
    width: 40%;
    > h1 {
      margin: 0;
      font-family: Lato;
      font-weight: normal;
      font-size: 28px;
      letter-spacing: 1px;
      color: #1f1f1f;
    }
    > h2 {
      font-family: Lato;
      font-weight: normal;
      font-size: 24px;
      letter-spacing: 0.5px;
      color: #1f1f1f;
    }
    > h3 {
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 0.5px;
      color: #bcbabe;
    }
    > h4 {
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 0.5px;
      color: #00a9b0;
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    > div h1 {
      font-weight: bold;
      font-size: 18px;
      color: #1f1f1f;
    }
    > div h2 {
      font-weight: normal;
      font-size: 16px;
      color: #1f1f1f;
    }
    > div h3 {
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 0.5px;
      color: #bcbabe;
      margin: 37px 0 0 0;
    }
  }
  .infoImg {
    width: 100px;
    height: 100px;
    background: #000;
    margin: 0 12px 0 0;
  }
`;

const BorderBottom = styled.div`
  border: 1px solid #00a9b0;
`;

function FavoritesPage({ token }): JSX.Element {
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
        <FavoritesWrap>
          <FavoritesHead>
            <CheckboxCustom
              iconWidth="16px"
              iconHeight="16px"
              type="checkbox"
              Icon={CheckOnBasic}
            />
          </FavoritesHead>
          <BorderBottom />
          <FavCard>
            <div className="img" />
            <div className="desc">
              <h1>New apartment in Strovolos</h1>
              <h4>Larnaca district, Oroklini Tourist Area</h4>
              <h2>3 bedrooms, 72 m2</h2>
              <h1>1 000 000 € </h1>
              <h3>
                Luxury apartment for sale in Strovolos, Nicosia. The building is comprised of two
                floors with total of 6 apartments (3 apartments per floor) and features high
                standards and modern design.
              </h3>
            </div>
            <div className="info">
              <div className="infoImg" />
              <div>
                <h1>Lighthouse</h1>
                <h3>Language:</h3>
                <h2>English, Russian</h2>
              </div>
              <ButtonPrimary background="#00A9B0" width="175px" height="32px" color="#FAFAFA">
                +357 220 52 ...
              </ButtonPrimary>
            </div>
          </FavCard>
          <BorderBottom />
          <FavCard>
            <div className="img" />
            <div className="desc">
              <h1>New apartment in Strovolos</h1>
              <h4>Larnaca district, Oroklini Tourist Area</h4>
              <h2>3 bedrooms, 72 m2</h2>
              <h1>1 000 000 € </h1>
              <h3>
                Luxury apartment for sale in Strovolos, Nicosia. The building is comprised of two
                floors with total of 6 apartments (3 apartments per floor) and features high
                standards and modern design.
              </h3>
            </div>
            <div className="info">
              <div className="infoImg" />
              <div>
                <h1>Lighthouse</h1>
                <h3>Language:</h3>
                <h2>English, Russian</h2>
              </div>
              <ButtonPrimary background="#00A9B0" width="175px" height="32px" color="#FAFAFA">
                +357 220 52 ...
              </ButtonPrimary>
            </div>
          </FavCard>
        </FavoritesWrap>
      </CenterContent>
    </MainTemplate>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default FavoritesPage;

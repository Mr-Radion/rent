/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import React, { useState } from 'react';
import shortid from 'shortid';
import {
  AboutApartment,
  AboutHouse,
  AboutCommercial,
  AboutLand,
  AboutOther,
  Li,
  LiName,
  Round,
  // AddingWrap,
  CheckBoxWrapInLine,
  CheckBoxWrapColumn,
  BigCheckBoxWrap,
  H1,
  H2,
} from '../ui/adding-ad';
import {
  MainTemplate,
  ContainerAdaptive,
  ButtonPrimary,
  CheckboxCustom,
  Input,
  CheckOnBasic,
  CheckOffBasic,
  RoundcheckOnBasic,
  RoundcheckOffBasic,
} from '../ui';
import { Header, Footer, navMainData } from '../features/common';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';

// import { FilterBedrooms } from '../features/filters/components';
// import { FilterBedrooms } from '../components';
const AddingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const LeftBlock = styled.div`
  width: 66%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
const Cover = styled.div`
  padding: 24px 24px 40px 24px;
  background: #fff;
  > ul {
    margin-top: 40px;
  }

  > ul:nth-child(3) {
    width: 100%;
  }
  .lightText {
    font-style: normal;
    color: #bcbabe;
    margin: 0 0 16px 0;
    font-weight: normal;
    font-size: 14px;
  }
  .imageInput {
    border: 2px dashed #a1d6e2;
    border-radius: 4px;
    width: 100%;
    height: 120px;
  }
  .eur {
    margin: 4px 0 0 0;
  }
  .subLabel {
    margin: 4px 0 0 1rem;
  }
`;
const AdressCover = styled(Cover)`
  > h1:nth-child(1) {
    float: left;
  }
  > ul:nth-child(2) {
    clear: both;
    float: left;
  }
`;
const RightBlock = styled.div`
  padding: 22px 20px;
  background: #fff;
  width: 32%;
  .indicatorBlock {
    display: flex;
    margin-bottom: 38px;
  }
  .chart {
    background: #a1d6e2;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin-right: 40px;
  }
  .percent {
    color: #00a9b0;
    font-weight: bold;
    font-size: 48px;
  }
`;
const BreadCrumbs = styled.div`
  margin-top: 6px;
`;
export function AddingAdPage({ token }): JSX.Element {
  const [tokenT, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/auth')
      .then(response => response.json())
      .then(res => setToken(res.success));
  }, []);

  const [typeOfAccount, setAccount] = useState(null);
  const [typeOfRent, setTypeOfPeriodype] = useState(null);
  const [typeOfProp, setProp] = useState(null);
  const [typeOfDeposite, setTypeOfDeposite] = useState(null);
  const [typeOfPeriod, setTypeOfPeriod] = useState(null);
  const [typeOfExpences, setTypeOfExpences] = useState(null);
  const [typeOfBills, setTypeOfBills] = useState(null);
  const [typeOfProp6, setProp6] = useState(null);
  console.log(typeOfProp, typeOfRent, typeOfAccount);
  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} token={token || tokenT} />}
      footer={
        <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
      }
    >
      <ContainerAdaptive display="block" background="#F1F1F2" padding="0px 20px" margin="0 auto">
        <BreadCrumbs>Breadcrumbs / Breadcrumbs / Breadcrumbs</BreadCrumbs>
        <H1>New advertisement</H1>

        <AddingWrap>
          <LeftBlock>
            {/* Type of Ad */}
            <Cover>
              <H2>Type of Ad</H2>
              <ul>
                <Li>
                  <LiName>
                    Account
                    <Round />
                  </LiName>
                  <>
                    {Array.from(['Owner', 'Agent'], (type, idx) => (
                      <ButtonPrimary
                        fontSize="16px"
                        minWidth="120px"
                        height="36px"
                        background={typeOfAccount === type ? '#00A9B0' : '#FAFAFA'}
                        color={typeOfAccount === type ? '#FAFAFA' : '#00A9B0'}
                        type="button"
                        marginRight={type === 'Owner' ? '1rem' : '0'}
                        key={`${shortid.generate()}type${idx}`}
                        onClick={() => setAccount(type)}
                      >
                        {type}
                      </ButtonPrimary>
                    ))}
                  </>
                </Li>
                <Li>
                  <LiName>
                    Type of Ad
                    <Round />
                  </LiName>
                  <>
                    {Array.from(['Rent out', 'Sell'], (type, idx) => (
                      <ButtonPrimary
                        fontSize="16px"
                        minWidth="120px"
                        height="36px"
                        background={typeOfRent === type ? '#00A9B0' : '#FAFAFA'}
                        color={typeOfRent === type ? '#FAFAFA' : '#00A9B0'}
                        type="button"
                        marginRight={type === 'Rent out' ? '1rem' : '0'}
                        key={`${shortid.generate()}type${idx}`}
                        onClick={() => setTypeOfPeriodype(type)}
                      >
                        {type}
                      </ButtonPrimary>
                    ))}
                  </>
                </Li>
                <Li>
                  <LiName>
                    Type of property
                    <Round />
                  </LiName>
                  <BigCheckBoxWrap>
                    {Array.from(
                      ['Apartment', 'House', 'Land', 'Commercial', 'Other'],
                      (type, idx) => (
                        // Поменять на input radio или оптимизировать вместе с useState вынести в отдельный пользовательский хук
                        <CheckboxCustom
                          label={type}
                          iconWidth="16px"
                          iconHeight="16px"
                          labelLeft="8px"
                          type="checkbox"
                          name={type}
                          defaultCheck={typeOfProp === type && 'checked'}
                          Icon={typeOfProp === type ? RoundcheckOnBasic : RoundcheckOffBasic}
                          onClickItem={
                            typeOfProp === null || typeOfProp !== type
                              ? () => setProp(type)
                              : () => setProp(null)
                          }
                          key={`${shortid.generate()}type${idx}`}
                        />
                      ),
                    )}
                  </BigCheckBoxWrap>
                </Li>
              </ul>
            </Cover>
            {typeOfProp != null && typeOfAccount != null && typeOfRent != null ? (
              <>
                {/* Address */}
                <AdressCover>
                  <H2>Address</H2>
                  <ul className="ul">
                    <Li>
                      <LiName>
                        Postcode
                        <Round />
                      </LiName>
                      <Input placeholder="603000" />
                    </Li>
                    <Li>
                      <LiName>
                        Street
                        <Round />
                      </LiName>
                      <Input placeholder="603000" />
                    </Li>
                    <Li>
                      <LiName>
                        Street number
                        <Round />
                      </LiName>
                      <Input placeholder="603000" />
                    </Li>
                  </ul>
                </AdressCover>

                {/* About object */}
                <Cover>
                  <H2>About object</H2>
                  {typeOfProp === 'Apartment' ? (
                    <AboutApartment />
                  ) : typeOfProp === 'House' ? (
                    <AboutHouse />
                  ) : typeOfProp === 'Commercial' ? (
                    <AboutCommercial />
                  ) : typeOfProp === 'Land' ? (
                    <AboutLand />
                  ) : (
                    <AboutOther />
                  )}
                </Cover>
                {/* Photo & Video */}
                <Cover>
                  <H2>Photo & Video</H2>
                  <LiName>Add photos and plan</LiName>
                  <h5 className="lightText">You can add up to 10 photos</h5>
                  <input className="imageInput" type="image" alt="//" />
                  <LiName>Link on youtube</LiName>
                  <Input placeholder="603000" width="35%" marginRight="15px" />
                  <ButtonPrimary
                    fontSize="16px"
                    minWidth="95px"
                    height="32px"
                    background="#BCBABE"
                    color="#fff"
                    type="button"
                  >
                    Add
                  </ButtonPrimary>
                  <LiName>
                    Title
                    <Round />
                    <span className="lightText">0 / 50 symbols</span>
                  </LiName>
                  <Input placeholder="603000" width="100%" />
                  <LiName>
                    Description
                    <Round />
                    <span className="lightText">0 / 1550 symbols</span>
                  </LiName>
                  <Input placeholder="603000" width="100%" height="100px" />
                </Cover>
                {/* Price */}
                {typeOfRent === 'Rent out' ? (
                  <Cover>
                    <H2>Price and conditions</H2>
                    <ul className="ul">
                      <Li>
                        <LiName>
                          Price per month
                          <Round />
                        </LiName>
                        <Input placeholder="603000" marginRight="1rem" />
                        <p className="eur">EUR</p>
                      </Li>
                      <Li>
                        <LiName>
                          Deposit
                          <Round />
                        </LiName>
                        <CheckBoxWrapInLine>
                          {Array.from(['None', '1 month', '2 months', '3 months'], (type, idx) => (
                            <CheckboxCustom
                              label={type}
                              iconWidth="16px"
                              iconHeight="16px"
                              labelLeft="8px"
                              type="checkbox"
                              defaultCheck={typeOfDeposite === type && 'checked'}
                              Icon={
                                typeOfDeposite === type ? RoundcheckOnBasic : RoundcheckOffBasic
                              }
                              onClickItem={
                                typeOfDeposite === null || typeOfDeposite !== type
                                  ? () => setTypeOfDeposite(type)
                                  : () => setTypeOfDeposite(null)
                              }
                              key={`${shortid.generate()}type${idx}`}
                            />
                          ))}
                        </CheckBoxWrapInLine>
                      </Li>
                      <Li>
                        <LiName>
                          Rent period
                          <Round />
                        </LiName>
                        <CheckBoxWrapInLine>
                          {Array.from(
                            ['Few months', 'From 6 months', 'From 1 year'],
                            (type, idx) => (
                              <CheckboxCustom
                                label={type}
                                iconWidth="16px"
                                iconHeight="16px"
                                labelLeft="8px"
                                type="checkbox"
                                defaultCheck={typeOfPeriod === type && 'checked'}
                                Icon={
                                  typeOfPeriod === type ? RoundcheckOnBasic : RoundcheckOffBasic
                                }
                                onClickItem={
                                  typeOfPeriod === null || typeOfPeriod !== type
                                    ? () => setTypeOfPeriod(type)
                                    : () => setTypeOfPeriod(null)
                                }
                                key={`${shortid.generate()}type${idx}`}
                              />
                            ),
                          )}
                        </CheckBoxWrapInLine>
                      </Li>
                      <Li>
                        <LiName>
                          Common expences
                          <Round />
                        </LiName>
                        <CheckBoxWrapInLine>
                          {Array.from(
                            ['Included in price', 'Not included in price'],
                            (type, idx) => (
                              <CheckboxCustom
                                label={type}
                                iconWidth="16px"
                                iconHeight="16px"
                                labelLeft="8px"
                                type="checkbox"
                                onClickItem={
                                  typeOfExpences === null || typeOfExpences !== type
                                    ? () => setTypeOfExpences(type)
                                    : () => setTypeOfExpences(null)
                                }
                                defaultCheck={typeOfExpences === type && 'checked'}
                                Icon={
                                  typeOfExpences === type ? RoundcheckOnBasic : RoundcheckOffBasic
                                }
                                key={`${shortid.generate()}type${idx}`}
                              />
                            ),
                          )}
                        </CheckBoxWrapInLine>
                      </Li>
                      <Li>
                        <LiName>
                          Electricity / water bills
                          <Round />
                        </LiName>
                        <CheckBoxWrapInLine>
                          {Array.from(['On the owner name', 'On the tenant name'], (type, idx) => (
                            <CheckboxCustom
                              label={type}
                              iconWidth="16px"
                              iconHeight="16px"
                              labelLeft="8px"
                              type="checkbox"
                              defaultCheck={typeOfBills === type && 'checked'}
                              onClickItem={
                                typeOfBills === null || typeOfBills !== type
                                  ? () => setTypeOfBills(type)
                                  : () => setTypeOfBills(null)
                              }
                              Icon={typeOfBills === type ? RoundcheckOnBasic : RoundcheckOffBasic}
                              key={`${shortid.generate()}type${idx}`}
                            />
                          ))}
                        </CheckBoxWrapInLine>
                      </Li>
                    </ul>
                  </Cover>
                ) : (
                  <Cover>
                    <H2>Price</H2>
                    <ul className="ul">
                      <Li>
                        <LiName>
                          Price
                          <Round />
                        </LiName>
                        <Input placeholder="603000" marginRight="1rem" />
                        <p className="eur">EUR</p>
                      </Li>
                    </ul>
                  </Cover>
                )}
                {/* Contacts */}
                <Cover>
                  <H2>Contacts</H2>
                  <ul className="ul">
                    <Li>
                      <LiName>
                        Telephone
                        <Round />
                      </LiName>
                      <Input placeholder="603000" marginRight="15px" />
                    </Li>
                    <Li>
                      <LiName>WhatsApp</LiName>
                      <Input placeholder="603000" />
                    </Li>
                  </ul>
                  <div>
                    <ButtonPrimary
                      fontSize="16px"
                      minWidth="120px"
                      height="36px"
                      background="#FAFAFA"
                      color="#00A9B0"
                      type="button"
                      float="right"
                      marginRight="2rem"
                    >
                      Publish
                    </ButtonPrimary>
                  </div>
                </Cover>
              </>
            ) : (
              <></>
            )}
          </LeftBlock>

          <RightBlock>
            <div className="indicatorBlock">
              <div className="chart" />
              <div className="percent">20 %</div>
            </div>
            <CheckBoxWrapColumn>
              {Array.from(
                [
                  'Type of Ad',
                  'Address',
                  'About object',
                  'Facilities',
                  'Photo and video',
                  'Price and conditions',
                ],
                (type, idx) => (
                  <CheckboxCustom
                    label={type}
                    iconWidth="16px"
                    iconHeight="16px"
                    labelLeft="8px"
                    type="checkbox"
                    defaultCheck={typeOfProp6 === type && 'checked'}
                    onClickItem={
                      typeOfProp6 === null || typeOfProp6 !== type
                        ? () => setProp6(type)
                        : () => setProp6(null)
                    }
                    Icon={typeOfProp6 === type ? CheckOnBasic : CheckOffBasic}
                    key={`${shortid.generate()}type${idx}`}
                  />
                ),
              )}
            </CheckBoxWrapColumn>
          </RightBlock>
        </AddingWrap>
      </ContainerAdaptive>
    </MainTemplate>
  );
}

export function getServerSideProps({ req }) {
  return { props: { token: req.cookies.fcd || '' } };
}

export default AddingAdPage;

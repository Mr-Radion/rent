import React from 'react';
// import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// import { GetServerSideProps } from 'next';
// import { END } from 'redux-saga';
// import { wrapper } from '../features/common/store';
// import PageNotFound from './404';
import { ButtonPrimary, MainTemplate, CenterContentTemplate } from '../ui';
import { LoginForm, RegisterForm } from '../features/authenticate-form';
import { fetchSignUp, fetchVerify, fetchSignIn } from '../features/authenticate-form/ducks';
import { Header, Footer, navMainData } from '../features/common';
import { filterPropertyItems, filterDistrictItems } from '../features/filters/lib';

function JoinPage({ token }): JSX.Element {
  // if (token) {
  //   return <PageNotFound />;
  // }
  const dispatch = useDispatch();
  const router = useRouter();

  // React.useEffect(() => {
  //   dispatch(authToggle(token));
  // }, [token]);
  // console.log(token);

  const { data } = useSelector(({ userAuth }: any) => userAuth);
  const [phoneValid, setPhoneValid] = React.useState(false);
  // const [codeSent, setCodeSent] = React.useState(false);
  const [codeValid, setCodeValid] = React.useState(false);
  const [form, setForm] = React.useState<any>({
    tel: 0,
    code: 0,
    name: '',
    email: '',
  });
  const [formType, setFormType] = React.useState<any>('I`m owner');

  React.useEffect(() => {
    if (codeValid) {
      dispatch(fetchSignIn({ tel: form.tel, code: form.code }));
    }
  }, [codeValid]);

  const handleInput = (e: any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleInputCode = ({ target }) => {
    if (target.value.length < 6) setForm({ ...form, [target.name]: target.value });
    if (target.name === 'code' && target.value.length === 5) {
      setCodeValid(true);
    } else setCodeValid(false);
  };

  const onSelectProceed = ({ target }) => {
    console.log(target.name);
    if (target.name === 'proceed' && form.tel) {
      dispatch(fetchVerify(form.tel));
      // if (code === true) {
      setPhoneValid(true);
      // }
    } else if (target.name === 'changeNumber') {
      setPhoneValid(false);
      setCodeValid(false);
      setForm((form.code = 0));
    }
  };

  const onSelectRegistration = () => {
    // routing with a transition to the main page, but where there will already be a profile menu
    dispatch(fetchSignUp({ phone: form.tel, type: formType, name: form.name, email: form.email }));
    router.push({
      pathname: '/',
    });
  };

  return (
    <MainTemplate
      header={<Header userNavMenu={navMainData} token={token} />}
      footer={
        <Footer menuItemCities={filterDistrictItems} menuItemTypeProperty={filterPropertyItems} />
      }
    >
      <CenterContentTemplate>
        {data && data.msg === 'User does not exist' ? (
          <>
            <RegisterForm
              type={formType}
              name={form.name}
              email={form.email}
              setCurrentType={setFormType}
              handleInput={handleInput}
            />
            <ButtonPrimary
              width="218px"
              background="#00A9B0"
              color="#FAFAFA"
              height="36px"
              marginTop="15px"
              marginLeft="101px"
              onClick={onSelectRegistration}
            >
              Complete registration
            </ButtonPrimary>
          </>
        ) : (
          <>
            <LoginForm
              data={data}
              tel={form.tel}
              code={form.code}
              handleInput={handleInput}
              handleInputCode={handleInputCode}
              phoneValid={phoneValid}
              onSelectProceed={onSelectProceed}
              // codeSent={codeSent}
            />
            <ButtonPrimary
              width="218px"
              background="#00A9B0"
              name="proceed"
              color="#FAFAFA"
              radius="4px"
              height="36px"
              marginTop="15px"
              marginLeft="101px"
              onClick={e => onSelectProceed(e)}
            >
              Proceed
            </ButtonPrimary>
          </>
        )}
      </CenterContentTemplate>
    </MainTemplate>
  );
}

export function getServerSideProps({ req, res }) {
  console.log(res);
  return { props: { token: req.cookies.fcd || '' } };
}

export default JoinPage;

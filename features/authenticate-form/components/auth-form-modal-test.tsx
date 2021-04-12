import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled, { StyledComponent } from 'styled-components';
import classNames from 'classnames';
import { fetchSignIn } from '../ducks';
import {
  Modal,
  Logo,
  Input,
  ButtonPrimary,
  NumberField,
  OptionButton,
  // ButtonBedrooms,
  H3,
  H6,
} from '../../../ui';

const CounterList: StyledComponent<any, any> = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const LoginStyled: StyledComponent<any, any> = styled.ul`
  padding: 0 101px;
`;

const EditablePhone: StyledComponent<any, any> = styled.ul`
  display: block;
`;

export function AuthenticationForm({ closedModal }): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData } = useSelector(({ userAuth }: any) => userAuth);
  const [phoneValid, setPhoneValid] = React.useState(false);
  const [codeValid, setCodeValid] = React.useState(false);
  const [form, setForm] = React.useState<any>({
    tel: 0,
    code: 0,
    name: '',
    email: '',
  });
  const [formType, setFormType] = React.useState<any>('I`m owner');

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

  const refInput = React.useRef();
  React.useEffect(() => {
    // refInput.current.focus();
    // console.log(refInput);
    // const autoFocus = true;
    if (codeValid) {
      dispatch(fetchSignIn({ phone: form.tel, code: form.code }));
      if (userData && userData.msg !== 'User does not exist') closedModal(false);
      router.push({
        pathname: '/my-profile',
      });
    }
  }, [codeValid, userData, refInput]);

  const onSelectProceed = ({ target }) => {
    console.log(target.name);
    if (target.name === 'proceed' && form.tel) {
      setPhoneValid(true);
      // dispatch(fetchVerify(form.tel));
    } else if (target.name === 'changeNumber') {
      // setForm((form.tel = form.tel));
      setPhoneValid(false);
      setCodeValid(false);
      setForm((form.code = 0));
      // console.log(form.tel);
    }
  };

  const onSelectRegistration = () => {
    // routing with a transition to the main page, but where there will already be a profile menu
    // dispatch(fetchSignUp({ phone: form.tel, type: formType, name: form.name, email: form.email }));
    closedModal(false);
    router.push({
      pathname: '/my-profile',
    });
  };

  return (
    <>
      {codeValid && userData === '33' ? (
        <div>
          <H3 fontWeight="bold">
            Hello!
            <br /> Looks like you don’t have an account yet.
          </H3>
          <br />
          <H3>Please fill in the fields to complete the registration</H3>
        </div>
      ) : (
        <Logo />
      )}

      {/* editable div, entering a code and the appearance of fields for entering a name and mail */}
      {phoneValid ? (
        <LoginStyled>
          <EditablePhone>
            <H6 margin="40px 0 0 0 ">Phone number</H6>
            <p>{form.tel}</p>
            <ButtonPrimary
              color="#00A9B0"
              fontSize="11px"
              fontWeight="normal"
              name="changeNumber"
              onClick={e => onSelectProceed(e)}
            >
              Change number
            </ButtonPrimary>
          </EditablePhone>
          {codeValid && userData === '33' ? (
            <div>
              <CounterList>
                <OptionButton name="I`m owner" onClick={() => setFormType('I`m owner')}>
                  <ButtonPrimary
                    fontSize="14px"
                    type="submit"
                    width="101px"
                    height="36px"
                    fontWeight="normal"
                    background="#F1F1F2"
                    border="2px solid #A1D6E2"
                    color="#4B4B4B"
                    className={classNames({
                      active: formType === 'I`m owner',
                    })}
                  >
                    I`m owner
                  </ButtonPrimary>
                </OptionButton>
                <OptionButton name="Agency" onClick={() => setFormType('Agency')}>
                  <ButtonPrimary
                    fontSize="14px"
                    type="submit"
                    width="101px"
                    height="36px"
                    fontWeight="normal"
                    background="#F1F1F2"
                    border="2px solid #A1D6E2"
                    color="#4B4B4B"
                    className={classNames({
                      active: formType === 'Agency',
                    })}
                  >
                    Agency
                  </ButtonPrimary>
                </OptionButton>
              </CounterList>
              <div>
                <Input
                  // ref={refInput}
                  value={form.name}
                  name="name"
                  placeholder="name"
                  type="text"
                  width="218px"
                  height="36px"
                  marginTop="10px"
                  onChange={handleInput}
                />
              </div>
              <div>
                <Input
                  value={form.email}
                  name="email"
                  placeholder="email"
                  type="email"
                  width="218px"
                  height="36px"
                  marginTop="10px"
                  onChange={handleInput}
                />
              </div>
            </div>
          ) : (
            <>
              <NumberField
                type="number"
                min="0"
                max="99999"
                value={form.code === 0 ? undefined : form.code}
                name="code"
                onChange={handleInputCode}
                placeholder="Verification code"
                width="218px"
                height="36px"
                margin="16px 0 4px 0"
                border="2px solid #A1D6E2"
                borderRadius="4px"
                paddingRight="24px"
              />
              <H6 textAlign="center" margin="2px 0 24px 0" color="#00A9B0">
                Sent code once again in 02:00
              </H6>
            </>
          )}
        </LoginStyled>
      ) : (
        <div>
          {/* <h3>Enter your phone number</h3> */}
          <H3 margin="42px 0 33px">Enter your phone number</H3>
          <Input
            // ref={refInput}
            // ref={function (component) {
            //   React.findDOMNode(component).focus();
            // }}
            value={form.tel === 0 ? undefined : form.tel}
            name="tel"
            placeholder="X XXX  XXX  XX  XX "
            type="tel"
            width="218px"
            height="36px"
            margin="0 0 40px 0"
            autoFocus
            onChange={handleInput}
          />
          {/* <input
          ref={input => {
            if (input != null) {
              input.focus();
            }
          }}
          placeholder="tel"
          type="tel"
          autoFocus
        /> */}
        </div>
      )}
      {/* continue and register buttons */}
      {codeValid && userData === '33' ? (
        <ButtonPrimary
          width="218px"
          background="#00A9B0"
          color="#FAFAFA"
          height="36px"
          marginTop="15px"
          // marginLeft="101px"
          onClick={onSelectRegistration}
        >
          Complete registration
        </ButtonPrimary>
      ) : (
        <ButtonPrimary
          width="218px"
          background="#00A9B0"
          name="proceed"
          color="#FAFAFA"
          radius="4px"
          height="36px"
          marginTop="15px"
          // marginLeft="101px"
          onClick={e => onSelectProceed(e)}
        >
          Proceed
        </ButtonPrimary>
      )}
    </>
  );
}

type LoginFormProps = {
  opened: any;
  onClose: any;
};

export const AuthenticationFormModal: React.FC<LoginFormProps> = ({ opened, onClose }) => {
  return (
    <Modal modalOpened={opened} onClose={onClose} title="Log In and register">
      <>
        <AuthenticationForm closedModal={onClose} />
      </>
    </Modal>
  );
};

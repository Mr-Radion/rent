import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled, { StyledComponent } from 'styled-components';
import classNames from 'classnames';
import { fetchVerify, fetchSignIn, fetchSignUp } from '../ducks';
import {
  Modal,
  Logo,
  Input,
  ButtonPrimary,
  NumberField,
  OptionButton,
  ButtonBedrooms,
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
  // const { data, code } = useSelector(({ userAuth }: any) => userAuth);
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

  React.useEffect(() => {
    if (codeValid) {
      dispatch(fetchSignIn({ phone: form.tel, code: form.code }));
    }
  }, [codeValid]);

  const onSelectProceed = ({ target }) => {
    console.log(target.name);
    if (target.name === 'proceed' && form.tel) {
      setPhoneValid(true);
      dispatch(fetchVerify(form.tel));
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
    dispatch(fetchSignUp({ phone: form.tel, type: formType, name: form.name, email: form.email }));
    closedModal(false);
    router.push({
      pathname: '/',
    });
  };

  return (
    <>
      {codeValid ? (
        <div>
          <h3>
            Hello!
            <br /> Looks like you don’t have an account yet.
          </h3>
          <br />
          <h3>Please fill in the fields to complete the registration</h3>
        </div>
      ) : (
        <Logo />
      )}

      {/* editable div, entering a code and the appearance of fields for entering a name and mail */}
      {phoneValid ? (
        <LoginStyled>
          <EditablePhone>
            <span>Phone number</span>
            <p>{form.tel}</p>
            <ButtonPrimary name="changeNumber" onClick={e => onSelectProceed(e)}>
              Change number
            </ButtonPrimary>
          </EditablePhone>
          {codeValid ? (
            <div>
              <CounterList>
                <OptionButton name="I`m owner" onClick={() => setFormType('I`m owner')}>
                  <ButtonBedrooms
                    fontSize="14px"
                    type="submit"
                    width="101px"
                    height="36px"
                    className={classNames({
                      active: formType === 'I`m owner',
                    })}
                  >
                    I`m owner
                  </ButtonBedrooms>
                </OptionButton>
                <OptionButton name="Agency" onClick={() => setFormType('Agency')}>
                  <ButtonBedrooms
                    fontSize="14px"
                    type="submit"
                    width="101px"
                    height="36px"
                    className={classNames({
                      active: formType === 'Agency',
                    })}
                  >
                    Agency
                  </ButtonBedrooms>
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
                placeholder="Code"
                width="110px"
                height="36px"
                border="2px solid #BCBABE"
                borderRadius="4px"
                paddingRight="24px"
              />
              <p> Sent code once again in 02:00</p>
            </>
          )}
        </LoginStyled>
      ) : (
        <div>
          <h3>Enter your phone number</h3>
          <Input
            // ref={refInput}
            value={form.tel === 0 ? undefined : form.tel}
            name="tel"
            placeholder="tel"
            type="tel"
            width="218px"
            height="36px"
            marginTop="10px"
            marginLeft="101px"
            marginRight="101px"
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
      {codeValid ? (
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
      ) : (
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

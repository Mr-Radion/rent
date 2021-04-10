import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchSignIn, fetchSignUp, fetchVerify } from '../ducks';
import { Modal, ButtonPrimary } from '../../../ui';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

type AuthFormProps = {
  opened: any;
  onClose: any;
};

export const AuthenticationFormModal: React.FC<AuthFormProps> = ({ opened, onClose }) => {
  const router = useRouter();
  const dispatch = useDispatch();
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

  // console.log(data, code);

  // Todo
  // 1. Диспатч для верификации с отправкой номера (при нажатии на кнопку продолжить в первом окне срабатывает)
  // 2. Диспатч для авторизации с отправкой номера и кода (после ввода всех данных кода срабатывает)
  // 3. Диспатч для регистрации с отправкой номера, имени, типа пользователя (при нажатии complete registration срабатывает)

  React.useEffect(() => {
    if (codeValid) {
      dispatch(fetchSignIn({ phone: form.tel, code: form.code }));
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
      pathname: '/my-profile',
    });
    onClose();
  };

  return (
    <Modal modalOpened={opened} onClose={onClose} title="Log In and register">
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
            disabled={phoneValid && true}
          >
            Proceed
          </ButtonPrimary>
        </>
      )}
    </Modal>
  );
};

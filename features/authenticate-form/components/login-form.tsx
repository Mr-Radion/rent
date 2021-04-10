/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { NumberField, Input, ButtonPrimary } from '../../../ui';

export type LoginFormPropsT = {
  phone: string | number;
  code: string | number;
};

export type LoginFormProps = {
  data: any;
  tel: string;
  code: string;
  handleInput: any;
  handleInputCode: any;
  phoneValid: boolean;
  onSelectProceed: any;
  // codeSent: boolean;
};

const EditablePhone: StyledComponent<any, any> = styled.div`
  display: block;
`;

export const VerifyPhoneNumber = ({
  data,
  tel,
  code,
  handleInput,
  handleInputCode,
  phoneValid,
  onSelectProceed,
}) => {
  const refInput = React.useRef();
  // console.log(refInput);
  // refInput.current.focus();
  const timer = 'таймер';
  // возможно добавить в зависимость сам рендер отдельного компонента с верификацией
  // React.useEffect(() => {
  //   if (refInput) {
  //     (refInput as any).current.focus();
  //   }
  // }, [refInput]);
  return (
    <>
      {phoneValid ? (
        <EditablePhone>
          <span>Phone number</span>
          <p>{tel}</p>
          <ButtonPrimary name="changeNumber" onClick={e => onSelectProceed(e)}>
            Change number
          </ButtonPrimary>
        </EditablePhone>
      ) : (
        <>
          <h3>Enter your phone number</h3>
          {/* <NumberField
            type="number"
            ref={refInput}
            value={tel === 0 ? undefined : tel}
            name="tel"
            placeholder="tel"
            width="218px"
            height="36px"
            marginTop="10px"
            marginLeft="101px"
            marginRight="101px"
            onChange={handleInput}
            min="0"
            max="99999"
          /> */}
          <Input
            ref={refInput}
            value={tel === 0 ? undefined : tel}
            name="tel"
            placeholder="tel"
            type="tel"
            width="218px"
            height="36px"
            margin="10px 101px 0 101px"
            onChange={handleInput}
          />
        </>
      )}
      {phoneValid && (
        <>
          {/* <Input
            value={code === 0 ? undefined : code}
            name="code"
            onChange={handleInputCode}
            placeholder="Code"
            width="110px"
            height="36px"
            border="2px solid #BCBABE"
            borderRadius="4px"
            paddingRight="24px"
          /> */}
          <NumberField
            type="number"
            min="0"
            max="99999"
            value={code === 0 ? undefined : code}
            name="code"
            onChange={handleInputCode}
            placeholder="Code"
            width="110px"
            height="36px"
            border="2px solid #BCBABE"
            borderRadius="4px"
            paddingRight="24px"
          />
          {timer}
          {data && data.msg === 'Invalid code' && 'Вы неверно ввели код'}
        </>
      )}
    </>
  );
};

export const LoginForm = ({
  data,
  tel,
  code,
  handleInput,
  handleInputCode,
  phoneValid,
  onSelectProceed,
}) => {
  // const [codeSent, setCodeSent] = React.useState(false);
  // const [codeValid, setCodeValid] = React.useState(false);

  // React.useEffect(() => {
  //   AuthApi.verify(phone).then(res => setCodeSent(res.msg));
  // }, [codeSent]);

  return (
    <>
      <VerifyPhoneNumber
        data={data}
        tel={tel}
        code={code}
        handleInput={handleInput}
        handleInputCode={handleInputCode}
        phoneValid={phoneValid}
        onSelectProceed={onSelectProceed}
      />
    </>
  );
};

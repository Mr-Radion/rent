import styled, { StyledComponent } from 'styled-components';
import classNames from 'classnames';
import { Input, OptionButton, ButtonBedrooms } from '../../../ui';

export type RegisterFormPropsT = {
  phone: number;
  type: string;
  name: string;
  email: string;
};

export type RegisterFormProps = {
  type: string;
  name: string;
  email: string;
  setCurrentType: any;
  handleInput: any;
};

const CounterList: StyledComponent<any, any> = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const UserType = ({ currentType, setCurrentType }) => {
  return (
    <CounterList>
      <OptionButton name="I`m owner" onClick={() => setCurrentType('I`m owner')}>
        <ButtonBedrooms
          fontSize="14px"
          type="submit"
          width="101px"
          height="36px"
          className={classNames({
            active: currentType === 'I`m owner',
          })}
        >
          I`m owner
        </ButtonBedrooms>
      </OptionButton>
      <OptionButton name="Agency" onClick={() => setCurrentType('Agency')}>
        <ButtonBedrooms
          fontSize="14px"
          type="submit"
          width="101px"
          height="36px"
          className={classNames({
            active: currentType === 'Agency',
          })}
        >
          Agency
        </ButtonBedrooms>
      </OptionButton>
    </CounterList>
  );
};

export const UserName = ({ handleInput, name }) => {
  return (
    <div>
      <Input
        // ref={refInput}
        value={name}
        name="name"
        placeholder="name"
        type="text"
        width="218px"
        height="36px"
        marginTop="10px"
        onChange={handleInput}
      />
    </div>
  );
};

export const Email = ({ handleInput, email }) => {
  return (
    <div>
      <Input
        value={email}
        name="email"
        placeholder="email"
        type="email"
        width="218px"
        height="36px"
        marginTop="10px"
        onChange={handleInput}
      />
    </div>
  );
};

export const RegisterForm = ({ type, name, email, setCurrentType, handleInput }) => {
  return (
    <>
      <UserType currentType={type} setCurrentType={setCurrentType} />
      <UserName handleInput={handleInput} name={name} />
      <Email handleInput={handleInput} email={email} />
    </>
  );
};

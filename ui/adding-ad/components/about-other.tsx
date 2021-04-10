import { Li, LiName, Round } from './style';
import { Input } from '../..';

export const AboutOther = (): JSX.Element => (
  <ul className="ul">
    <Li>
      <LiName>
        Square
        <Round />
      </LiName>
      <Input placeholder="603000" />
      <p className="subLabel">m2</p>
    </Li>
  </ul>
);

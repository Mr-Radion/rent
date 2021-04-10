import shortid from 'shortid';
import React, { useState } from 'react';
import { Li, LiName, Round, CheckBoxWrapInLine, BigCheckBoxWrap } from './style';
import { Input, CheckboxCustom, RoundcheckOnBasic, RoundcheckOffBasic } from '../..';

export function AboutCommercial(): JSX.Element {
  const [typeOfCommercial, setTypeOfCommercial] = useState(null);
  const [typeOfCondition, setTypeOfCondition] = useState(null);
  const [parking, setParking] = useState(null);
  const [reception, setReception] = useState(null);

  return (
    <ul className="ul">
      <Li>
        <LiName>
          Type of commercial
          <Round />
        </LiName>
        <BigCheckBoxWrap>
          {Array.from(
            ['Office', 'Warehouse', 'Building', 'Bar / Restaurant ', 'Shop / Showroom', 'Other'],
            (type, idx) => (
              <CheckboxCustom
                label={type}
                iconWidth="16px"
                iconHeight="16px"
                labelLeft="8px"
                type="checkbox"
                Icon={typeOfCommercial === type ? RoundcheckOnBasic : RoundcheckOffBasic}
                onClickItem={
                  typeOfCommercial === null || typeOfCommercial !== type
                    ? () => setTypeOfCommercial(type)
                    : () => setTypeOfCommercial(null)
                }
                key={`${shortid.generate()}type${idx}`}
              />
            ),
          )}
        </BigCheckBoxWrap>
      </Li>
      <Li>
        <LiName>Condition</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['Basic', 'Design', 'Needs renovation'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={typeOfCondition === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                typeOfCondition === null || typeOfCondition !== type
                  ? () => setTypeOfCondition(type)
                  : () => setTypeOfCondition(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>
          Square
          <Round />
        </LiName>
        <Input placeholder="603000" />
        <p className="subLabel">m2</p>
      </Li>
      <Li>
        <LiName>Celling height</LiName>
        <Input placeholder="603000" />
      </Li>
      <Li>
        <LiName>Year of building</LiName>
        <Input placeholder="603000" />
      </Li>
      <Li>
        <LiName>Parking</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['yes', 'no'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={parking === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                parking === null || parking !== type
                  ? () => setParking(type)
                  : () => setParking(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>Reception area</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['yes', 'no'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={reception === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                reception === null || reception !== type
                  ? () => setReception(type)
                  : () => setReception(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
    </ul>
  );
}

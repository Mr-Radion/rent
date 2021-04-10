import shortid from 'shortid';
import React, { useState } from 'react';
import { Li, LiName, Round, CheckBoxWrapInLine, BigCheckBoxWrap } from './style';
import { Input, CheckboxCustom, RoundcheckOnBasic, RoundcheckOffBasic } from '../..';

export function AboutLand(): JSX.Element {
  const [typeOfLand, setTypeOfLand] = useState(null);
  const [electricity, setElectricity] = useState(null);
  const [water, setWater] = useState(null);
  const [sewage, setSewage] = useState(null);
  const [driveWays, setDriveWays] = useState(null);

  return (
    <ul className="ul">
      <Li>
        <LiName>
          Type of land
          <Round />
        </LiName>
        <BigCheckBoxWrap>
          {Array.from(
            ['Residential', 'Agricultural', 'Commercial', 'Industrial', 'Tourist', 'Other'],
            (type, idx) => (
              <CheckboxCustom
                label={type}
                iconWidth="16px"
                iconHeight="16px"
                labelLeft="8px"
                type="checkbox"
                Icon={typeOfLand === type ? RoundcheckOnBasic : RoundcheckOffBasic}
                onClickItem={
                  typeOfLand === null || typeOfLand !== type
                    ? () => setTypeOfLand(type)
                    : () => setTypeOfLand(null)
                }
                key={`${shortid.generate()}type${idx}`}
              />
            ),
          )}
        </BigCheckBoxWrap>
      </Li>
      <Li>
        <LiName>
          Square
          <Round />
        </LiName>
        <Input placeholder="603000" />
        <p className="subLabel">m2</p>
      </Li>

      <h1>extras</h1>
      <Li>
        <LiName>Electricity</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['yes', 'no'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={electricity === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                electricity === null || electricity !== type
                  ? () => setElectricity(type)
                  : () => setElectricity(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>Water supply</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['yes', 'no'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={water === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                water === null || water !== type ? () => setWater(type) : () => setWater(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>Sewage</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['yes', 'no'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={sewage === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                sewage === null || sewage !== type ? () => setSewage(type) : () => setSewage(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>Drive ways</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['yes', 'no'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={sewage === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                driveWays === null || driveWays !== type
                  ? () => setDriveWays(type)
                  : () => setDriveWays(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
    </ul>
  );
}

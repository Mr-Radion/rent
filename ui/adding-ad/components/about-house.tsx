import shortid from 'shortid';
import React, { useState } from 'react';
import { Li, LiName, Round, CheckBoxWrapInLine, BigCheckBoxWrap } from './style';
import {
  Input,
  CheckboxCustom,
  CheckOnBasic,
  CheckOffBasic,
  RoundcheckOnBasic,
  RoundcheckOffBasic,
} from '../..';

export function AboutHouse(): JSX.Element {
  const [materials, setMaterials] = useState(null);
  const [brandNew, setBrandNew] = useState(null);
  const [typeOfFurshing, setTypeOfFurshing] = useState(null);
  const [typeOfCondition, setTypeOfCondition] = useState(null);
  const [suitableChildren, setCuitableChildren] = useState(null);
  const [suitablePets, setCuitablePets] = useState(null);
  const [facilities, setFacilities] = useState(null);
  return (
    <ul className="ul">
      <Li>
        <LiName>
          Bedrooms
          <Round />
        </LiName>
        <Input placeholder="603000" />
      </Li>
      <Li>
        <LiName>
          Bathrooms
          <Round />
        </LiName>
        <Input placeholder="603000" />
      </Li>
      <Li>
        <LiName>Building floors</LiName>
        <Input placeholder="603000" />
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
        <LiName>Year of building</LiName>
        <Input placeholder="603000" />
      </Li>

      <Li>
        <LiName>Building material</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['Wood', 'Brick', 'Frame Structure', 'Other'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={materials === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                materials === null || materials !== type
                  ? () => setMaterials(type)
                  : () => setMaterials(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>Brand new</LiName>
        <CheckboxCustom
          label="yes"
          iconWidth="16px"
          iconHeight="16px"
          labelLeft="8px"
          type="checkbox"
          Icon={brandNew !== null ? CheckOnBasic : CheckOffBasic}
          onClickItem={brandNew === null ? () => setBrandNew(true) : () => setBrandNew(null)}
        />
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
              key={`${shortid.generate()}type${idx}`}
              Icon={typeOfCondition === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                typeOfCondition === null || typeOfCondition !== type
                  ? () => setTypeOfCondition(type)
                  : () => setTypeOfCondition(null)
              }
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>Furnishing</LiName>
        <CheckBoxWrapInLine>
          {Array.from(
            ['Fully furnished', 'Semi-furnished', 'Unfurnished', 'Unfurnished'],
            (type, idx) => (
              <CheckboxCustom
                label={type}
                iconWidth="16px"
                iconHeight="16px"
                labelLeft="8px"
                type="checkbox"
                Icon={typeOfFurshing === type ? RoundcheckOnBasic : RoundcheckOffBasic}
                onClickItem={
                  typeOfFurshing === null || typeOfFurshing !== type
                    ? () => setTypeOfFurshing(type)
                    : () => setTypeOfFurshing(null)
                }
                key={`${shortid.generate()}type${idx}`}
              />
            ),
          )}
        </CheckBoxWrapInLine>
      </Li>

      <Li>
        <LiName>Suitable for children</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['yes', 'no'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={suitableChildren === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                suitableChildren === null || suitableChildren !== type
                  ? () => setCuitableChildren(type)
                  : () => setCuitableChildren(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>Suitable for pets</LiName>
        <CheckBoxWrapInLine>
          {Array.from(['yes', 'no'], (type, idx) => (
            <CheckboxCustom
              label={type}
              iconWidth="16px"
              iconHeight="16px"
              labelLeft="8px"
              type="checkbox"
              Icon={suitablePets === type ? RoundcheckOnBasic : RoundcheckOffBasic}
              onClickItem={
                suitablePets === null || suitablePets !== type
                  ? () => setCuitablePets(type)
                  : () => setCuitablePets(null)
              }
              key={`${shortid.generate()}type${idx}`}
            />
          ))}
        </CheckBoxWrapInLine>
      </Li>
      <Li>
        <LiName>Facilities</LiName>
        <BigCheckBoxWrap>
          {Array.from(
            [
              'Kitchen furnished',
              'Washing machine',
              'WI-FI',
              'TV',
              'Smart TV',
              'Air condition',
              'Bath',
              'Hot water',
              'Private pool',
              'Common pool',
              'Sea view',
              'Mountain view',
              'Terrace',
              'Balcony',
              'Fireplace',
              'Parking',
            ],
            (type, idx) => (
              <CheckboxCustom
                label={type}
                iconWidth="16px"
                iconHeight="16px"
                labelLeft="8px"
                type="checkbox"
                Icon={facilities === type ? CheckOnBasic : CheckOffBasic}
                onClickItem={
                  facilities === null || facilities !== type
                    ? () => setFacilities(type)
                    : () => setFacilities(null)
                }
                key={`${shortid.generate()}type${idx}`}
              />
            ),
          )}
        </BigCheckBoxWrap>
      </Li>
    </ul>
  );
}

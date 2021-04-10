import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: bold;
  margin: 0;
  font-size: 48px;
  color: #1f1f1f;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
  }
  margin-top: 26px;
  letter-spacing: 2px;
`;
export const H2 = styled.h1`
  font-size: 36px;
  line-height: 44px;
  margin: 0;
  color: #1f1f1f;
`;

export const Li = styled.li`
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  color: #1f1f1f;
  display: flex;
  > button {
    margin: auto 0;
  }
  > input {
    margin-top: 10px;
  }
`;
export const LiName = styled.h1`
  > span:nth-child(2) {
    float: right;
  }
  font-family: Lato;
  font-weight: bold;
  font-size: 18px;
  line-height: 55px;
  margin: 0;
  min-width: 210px;
`;
export const Round = styled.div`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 100px;
  background: red;
  margin-left: 8px;
`;
// export const AddingWrap = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
export const CheckBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  gap: 2rem;
`;
export const CheckBoxWrapInLine = styled(CheckBoxWrap)`
  width: 100% !important;
`;
export const CheckBoxWrapColumn = styled(CheckBoxWrap)`
  flex-direction: column;
  font-weight: 900;
  font-size: 18px;
  gap: 2rem;
`;
export const BigCheckBoxWrap = styled(CheckBoxWrap)`
  margin: 20px 0 30px 0;
  width: 50% !important;
`;

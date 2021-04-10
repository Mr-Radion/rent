import React, { ReactNode } from 'react';
import styled, { StyledComponent } from 'styled-components';

import { ButtonPrimary, H3 } from '../atoms';
import { UsePortal } from '../../lib/custom-hooks';

const ModalStyled: StyledComponent<any, any> = styled.div`
  .modalOverlay {
    background: rgba(25, 53, 55, 0.25);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    transition: 0.5s;
  }
  .modalWindow {
    padding: 32px 24px 89px;
    box-shadow: 0px 4px 12px rgb(0 0 0 / 15%);
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    min-height: 200px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
  }
  .times {
    position: absolute;
    right: 32px;
    // top: 32px;
    width: 24px;
    height: 24px;
    opacity: 0.3;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #eaeaea;
  }
  .times:hover {
    opacity: 1;
  }
  .times:before,
  .times:after {
    position: absolute;
    left: 11px;
    content: ' ';
    height: 12px;
    width: 2px;
    background-color: #333;
    top: 6px;
  }
  .times:before {
    transform: rotate(45deg);
    right: 32px;
  }
  .times:after {
    transform: rotate(-45deg);
    right: 32px;
  }
`;

const CellPopUpHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

type ModalProps = {
  onClose: any;
  modalOpened: boolean;
  title?: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children, title, onClose, modalOpened }) => {
  const ref = React.useRef(null);
  return (
    <>
      {modalOpened && (
        <UsePortal onClose={onClose} refCurrent={ref}>
          <ModalStyled>
            <div className="modalOverlay">
              <div className="modalWindow" ref={ref}>
                {title && (
                  <CellPopUpHeading>
                    <H3 marginTop="0">{title}</H3>
                    <ButtonPrimary
                      radius="100%"
                      width="24px"
                      // background="#eaeaea"
                      height="24px"
                      onClick={onClose}
                      className="times"
                    />
                  </CellPopUpHeading>
                )}
                <>{children}</>
                {/* <CellPopUpContent> */}
              </div>
            </div>
          </ModalStyled>
        </UsePortal>
      )}
    </>
  );
};

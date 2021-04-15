import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useOnClickOutside } from '../../../lib/custom-hooks';
import { fetchSignOut } from '../../authenticate-form/ducks';
import { OptionPrimary, H2, PhotoBox } from '../../../ui';

export const UserMenuWrap = styled.div`
  .img {
    width: 54px;
    height: 54px;
    border-radius: 100%;
    background: #c4c4c4;
  }
  .transperentWrap {
    background: transperent;
    position: absolute;
    top: 60px;
    right: 16px;
    .profileMenuWrap {
      background: #fafafa;
      padding: 40px;
      margin-top: 30px;
      width: 26vw;
      .userId {
        border-bottom: 1px solid #BCBABE;
      }
      ul {
        padding-top: 46px;
      }
      .logOut {
        background: none;
        border: none;
        cursor: pointer;
        padding-left: 0;
      }
      > ul li a, ul li button {
        font-weight: inherit;
        &:hover {
          color: #00A9B0;
        }
      }
      > ul li:last-child  {
        margin-top: 40px;
        > a, button {
          font-family: Lato!important;
          font-style: normal!important;
          font-weight: 900!important;
          font-size: 18px!important;
          line-height: 28px!important;
          letter-spacing: 0.5px!important;
          color: #4B4B4B!important;
        &:hover {
          color: #00A9B0;
        }
        }
      }
    }
    }
  }
`;

export function UserMenu({ userMenuItems }) {
  const userMenuRef = React.useRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  useOnClickOutside(userMenuRef, () => setVisiblePopup(false));

  const handleClicksignOut = () => {
    dispatch(fetchSignOut());
    // if (router.pathname === '/') window.location.reload(true);
    router.push({ pathname: '/join' });
  };

  return (
    <UserMenuWrap
      ref={userMenuRef}
      onMouseEnter={() => setVisiblePopup(!visiblePopup)}
      onMouseLeave={() => setVisiblePopup(!visiblePopup)}
    >
      <PhotoBox
        src="/images/ava.svg"
        width="54px"
        height="54px"
        borderRadius="100%"
        background="#c4c4c4"
      />
      {visiblePopup && (
        <div className="transperentWrap">
          <div className="profileMenuWrap">
            <H2> Name Surname</H2>
            <H2 color="#4B4B4B" paddingTop="24px">
              {' '}
              id 777777
            </H2>
            {/* <Border margin="16px 0 40px 0" /> */}
            <ul>
              {userMenuItems &&
                userMenuItems.map((item, index) => (
                  <OptionPrimary height="30px" key={shortid.generate()}>
                    <Link href={item.endpoint}>
                      <a>{index === 0 ? 'User Profile' : item.title}</a>
                    </Link>
                  </OptionPrimary>
                ))}
              <OptionPrimary onClick={handleClicksignOut}>
                <button className="logOut" type="button" onClick={handleClicksignOut}>
                  Log Out
                </button>
                {/* <Link href="/">Log Out</Link> */}
              </OptionPrimary>
            </ul>
          </div>
        </div>
      )}
    </UserMenuWrap>
  );
}

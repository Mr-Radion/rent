import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useOnClickOutside } from '../../../lib/custom-hooks';
import { fetchSignOut } from '../../authenticate-form/ducks';
import { OptionPrimary, H2 } from '../../../ui';

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
      > ul li a, ul li button {
        font-weight: inherit;
        &:hover {
          color: #00A9B0;
        }
      }
      > ul li:last-child  {
        margin-top: 40px;
        > a, button {
        color: #4B4B4B;
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
      <div className="img" />
      {visiblePopup && (
        <div className="transperentWrap">
          <div className="profileMenuWrap">
            <H2> Name Surname</H2>
            <H2 color="#4B4B4B"> id 666666</H2>
            {/* <Border margin="16px 0 40px 0" /> */}
            <ul>
              {userMenuItems &&
                userMenuItems.map(item => (
                  <OptionPrimary height="30px" key={shortid.generate()}>
                    <Link href={item.endpoint}>
                      <a>{item.title}</a>
                    </Link>
                  </OptionPrimary>
                ))}
              <OptionPrimary onClick={handleClicksignOut}>
                <button type="button" onClick={handleClicksignOut}>
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

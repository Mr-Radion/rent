import React from 'react';
import { Header, navMainData } from '../features/common';
import { MainTemplate, HouseIcon, LinkButton, PageNotFoundIcon } from '../ui';

function ErrorPage(): JSX.Element {
  const [tokenT, setToken] = React.useState(null);

  React.useEffect(() => {
    fetch('/api/auth')
      .then(response => response.json())
      .then(res => setToken(res.success));
  }, []);

  return (
    <MainTemplate header={<Header userNavMenu={navMainData} token={tokenT} />}>
      <div className="error_wrapper">
        <div className="bg-gradient">
          <PageNotFoundIcon width="672" height="272" marginTop="266px" />
          <LinkButton
            href="/"
            width="244px"
            height="53px"
            color="#F1F1F2"
            background="#00A9B0"
            marginRight="20px"
            marginTop="34px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="0 30.5px 0 27.5px"
            fontSize="18px"
            lineHeight="28px"
          >
            Back to homepage
            <HouseIcon width="21" height="21" />
          </LinkButton>
        </div>
      </div>
      <style jsx>
        {`
          .error_wrapper {
            background-image: url('/images/background/page-not-found.svg');
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: left bottom;
          }
          .bg-gradient {
            background: linear-gradient(127.46deg, #ffffff 42.12%, rgba(255, 255, 255, 0) 100%);
            width: 100%;
            height: 100%;
            padding-left: 20px;
          }
        `}
      </style>
    </MainTemplate>
  );
}

export default ErrorPage;

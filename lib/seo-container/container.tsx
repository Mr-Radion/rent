/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title: string;
  descriptione: string;
  backgroundPreload?: string;
  homePage?: boolean;
};

const ContainerSeo = ({
  children,
  title = 'This is the default title',
  descriptione = 'This is the default description',
  backgroundPreload,
  homePage,
}: Props): JSX.Element => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={descriptione} />
      <meta name="robots" content="all" />
      <meta name="application-name" content="[RentUp]" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="favicon/site.webmanifest" />
      <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="preload" href={backgroundPreload} as="image" />
      {homePage && process.env.NODE_ENV === 'production' ? (
        <>
          <link rel="preload" href="/images/background/home-header.svg" as="image" />
        </>
      ) : (
        <>
          <link rel="preload" href="/images/background/home-header.svg" as="image" />
        </>
      )}
      {/* <meta name="application-name" content="[имя приложения]"> */}
      {/* preview for social networks */}
      {/* <meta property="og:url" content="[ссылка]" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="[заголовок]" />
      <meta property="og:description" content="[описание]" />
      <meta property="og:image" content="[ссылка на изображение]" />
      <meta property="article:author" content="[ссылка на аккаунт Facebook" />
      <meta property="og:site_name" content="[название сайта]" />
      <meta property="article:published_time" content="2014-08-12T00:01:56+00:00" />
      <meta name="pinterest" content="nopin" description="[нет!]" />
      <meta name="twitter:card" content="описание" />
      <meta name="twitter:site" content="[@websitetwitter]" />
      <meta name="twitter:creator" content="[@yourtwitter]" /> */}
      {/* <link rel="canonical" href="https://example.com/2010/06/9-things-to-do.html"></link> */}
    </Head>
    {children}
  </>
);

export default ContainerSeo;

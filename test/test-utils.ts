import { ReactElement } from 'react';
import { render } from '@testing-library/react';
// import { ThemeProvider } from 'my-ui-lib';
// import { TranslationProvider } from 'my-i18n-lib';
// import defaultStrings from 'i18n/en-x-default';

const AllTheProviders = ({ children }) => {
  return children;
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>{children}</TranslationProvider>
  //   </ThemeProvider>
  // );
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };

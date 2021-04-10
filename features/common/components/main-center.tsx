import { CenterContentTemplate } from '../../../ui';

type CenterContentProps = {
  mainNavItem: any;
  marginTop?: string;
};

export const CenterContent: React.FC<CenterContentProps> = ({
  mainNavItem,
  marginTop,
  children,
}) => {
  return (
    <CenterContentTemplate marginTop={marginTop}>
      {mainNavItem}
      {children}
    </CenterContentTemplate>
  );
};

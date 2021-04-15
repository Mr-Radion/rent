import { CenterContentTemplate } from '../../../ui';

type CenterContentProps = {
  mainNavItem: any;
  background?: string;
  align?: string;
  marginTop?: string;
};
export const CenterContent: React.FC<CenterContentProps> = ({
  children,
  mainNavItem,
  align,
  background,
  marginTop,
}) => {
  return (
    <CenterContentTemplate align={align} background={background} marginTop={marginTop}>
      {mainNavItem}
      {children}
    </CenterContentTemplate>
  );
};

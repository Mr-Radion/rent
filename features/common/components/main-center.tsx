import { CenterContentTemplate } from '../../../ui';

type CenterContentProps = {
  mainNavItem: any;
  background?: string;
  align?: string;
};
export const CenterContent: React.FC<CenterContentProps> = ({
  children,
  mainNavItem,
  align,
  background,
}) => {
  return (
    <CenterContentTemplate align={align} background={background}>
      {mainNavItem}
      {children}
    </CenterContentTemplate>
  );
};

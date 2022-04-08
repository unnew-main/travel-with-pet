import Link from 'next/link';
import { useRouter } from 'next/router';
import { TypoGraphy } from 'src/components/TypoGraphy';
import { customColor } from 'src/constants';
import * as S from './NavItem.style';

type NavItem = {
  pathName: string;
  customWidth: string;
  children: React.ReactNode;
};
export const NavItem = ({ pathName, children, customWidth }: NavItem) => {
  const router = useRouter();
  return (
    <Link href={pathName} passHref>
      <S.NavWrapper customWidth={customWidth}>
        <TypoGraphy
          type="body1"
          color={customColor.white}
          fontWeight={router.pathname === pathName ? 'bold' : ''}
        >
          {children}
        </TypoGraphy>

        <S.UnderBar isHover={router.pathname === pathName ? true : false} />
      </S.NavWrapper>
    </Link>
  );
};

import * as S from './Header.style';
import { TypoGraphy } from '../TypoGraphy';
import { customColor } from 'src/constants';
import { NavItem } from './components/NavItem';
import { VscBell } from 'react-icons/vsc';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <S.Container>
        <S.UpHeader>
          <Link href="/" passHref>
            <S.TitleWrapper>
              <TypoGraphy
                type="Title"
                color={customColor.darkBrown}
                fontWeight="bold"
              >
                Title 명
              </TypoGraphy>
            </S.TitleWrapper>
          </Link>
          <S.UpLeftWrapper>
            <S.WriteButtonWrapper>ButtonWrapper</S.WriteButtonWrapper>
            <S.AlertButtonWrapper>
              <VscBell />
            </S.AlertButtonWrapper>
          </S.UpLeftWrapper>
        </S.UpHeader>
        <S.DownHeader>
          <NavItem pathName={'/'} customWidth="90">
            정보
          </NavItem>
          <NavItem pathName={'/editor'} customWidth="140">
            모두의 이야기
          </NavItem>
          <NavItem pathName={'/'} customWidth="100">
            내 정보
          </NavItem>
        </S.DownHeader>
      </S.Container>
    </header>
  );
};

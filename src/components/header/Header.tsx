import * as S from './Header.style';
import { TypoGraphy } from '../TypoGraphy';
import { customColor } from 'src/constants';
import { NavItem } from './components/NavItem';
export const Header = () => {
  return (
    <header>
      <S.Container>
        <S.UpHeader>
          <S.TitleWrapper>
            <TypoGraphy
              type="Title"
              color={customColor.darkBrown}
              fontWeight="bold"
            >
              Title 명
            </TypoGraphy>
          </S.TitleWrapper>
          <S.UpLeftWrapper>
            <S.WriteButtonWrapper>ButtonWrapper</S.WriteButtonWrapper>
            <S.AlertButtonWrapper>알람Warpper</S.AlertButtonWrapper>
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

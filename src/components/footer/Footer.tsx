import * as S from './Footer.style';
import { List } from './components/list';
import { TypoGraphy } from '../TypoGraphy';
import { customColor } from 'src/constants';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <S.Container>
        <S.Wrapper>
          <S.UpFooter>
            <List title="추천" item={['여행', '음식점', '숙소', '기타']} />
            <List title="나의 이야기" item={['리스트']} />
          </S.UpFooter>
          <S.DownFooter>
            <S.TitleWrapper>
              <TypoGraphy
                type="h1"
                color={customColor.darkBrown}
                fontWeight="bold"
              >
                Title명
              </TypoGraphy>
            </S.TitleWrapper>
            <S.DownRightWrapper>
              <S.EmailWrapper>
                <TypoGraphy type="body3" color={customColor.gray}>
                  이메일: 1970005826c@gmail.com
                </TypoGraphy>
              </S.EmailWrapper>
              <Link
                href={'https://github.com/potato-club/travel-with-pet'}
                passHref
              >
                <S.IconWrapper>
                  <AiFillGithub />
                </S.IconWrapper>
              </Link>
            </S.DownRightWrapper>
          </S.DownFooter>
        </S.Wrapper>
      </S.Container>
    </footer>
  );
};

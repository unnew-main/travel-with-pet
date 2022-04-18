import * as S from './Footer.style';
import { List } from './components/List';
import { TypoGraphy } from '../TypoGraphy';
import { customColor } from 'src/constants';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

export const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.UpFooter>
          <List
            titleName="정보"
            titlePathName="/information"
            item={[
              { name: '여행', pathName: '/travel' },
              { name: '음식점', pathName: '/shop' },
              { name: '숙소', pathName: '/hotel' },
              { name: '기타', pathName: '/other' },
            ]}
          />
          <List
            titleName="일상"
            titlePathName="/daily"
            item={[{ name: '리스트', pathName: '' }]}
          />
        </S.UpFooter>
        <S.DownFooter>
          <S.TitleWrapper>
            <Link href="/" passHref>
              <a style={{ textDecoration: 'none' }}>
                <TypoGraphy
                  type="h1"
                  color={customColor.brownDark}
                  fontWeight="bold"
                >
                  MoengMoeng
                </TypoGraphy>
              </a>
            </Link>
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
  );
};

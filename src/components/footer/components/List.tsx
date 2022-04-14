import Link from 'next/link';
import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import * as S from './List.style';
type ListType = {
  titleName: string;
  titlePathName: string;
  item: { name: string; pathName: string }[];
};

export const List = ({ titleName, titlePathName, item }: ListType) => {
  return (
    <S.Wrapper>
      <Link href={titlePathName} passHref>
        <a style={{ textDecoration: 'none' }}>
          <S.TitleWrapper>
            <TypoGraphy
              type="body1"
              fontWeight="bold"
              color={customColor.brownDark}
            >
              {titleName}
            </TypoGraphy>
          </S.TitleWrapper>
        </a>
      </Link>
      {item.map(({ name, pathName }, idx: number) => (
        <S.ItemWrapper key={idx}>
          <Link href={titlePathName + pathName} passHref>
            <a style={{ textDecoration: 'none' }}>
              <TypoGraphy type="body2">{name}</TypoGraphy>
            </a>
          </Link>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

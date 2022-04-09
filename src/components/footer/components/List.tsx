import { TypoGraphy } from 'src/components';
import { customColor } from 'src/constants';
import * as S from './List.style';
type ListType = {
  title: string;
  item: string[];
};

export const List = ({ title, item }: ListType) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <TypoGraphy
          type="body1"
          fontWeight="bold"
          color={customColor.darkBrown}
        >
          {title}
        </TypoGraphy>
      </S.TitleWrapper>
      {item.map((data: string, idx: number) => (
        <S.ItemWrapper key={idx}>
          <TypoGraphy type="body2">{data}</TypoGraphy>
        </S.ItemWrapper>
      ))}
    </S.Wrapper>
  );
};

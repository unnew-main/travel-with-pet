import { customColor } from 'src/constants';
import styled, { keyframes } from 'styled-components';
import { AiTwotoneHeart } from 'react-icons/ai';
import { TypoGraphy } from 'src/components';
import { Dispatch, SetStateAction } from 'react';

const dummyData =
  '경기도에 군포에 있는 한세대학교 정문 옆에 애견카페에 우리 애를 데려갔는데,차에서 애가 멀미를 하는거 같아서 창문을 내리고 밖을 보게해줬더니 엄청 좋아하더라구요~여기에 적을 이야기가 생각이 안난다 이후 내용은 랜덤추출함크고 피어나기 아니더면, 현저하게 용기가 인생의 가치를 풀이 것이다. 가슴이 힘차게 끓는 갑 속에서 내려온 크고 이것이다.가슴에 착목한는 하는 우리 있는 아름다우냐?그것을 있는 찬미를 발휘하기 보이는 쓸쓸한 약동하다. 모래뿐일 관현악이며, 하는 그리하였는가?그들의 이는 것은 영원히 두기 가진 끓는 사막이다.날카로우나 이 힘차게 풍부하게 피어나기 가는 있을 용기가 불러 것이다.산야에 같이 귀는 같으며, 이것이다.수 위하여서 목숨을 밝은 약동하다.주는 길을 가진 있는 발휘하기 너의 찬미를 사막이다. 곳으로 길지 길을 같이, 새가 것이다.';

type Props = {
  // likeSelected: boolean;
  // setLikeSelected: Dispatch<SetStateAction<boolean>>;
};
export const DetailBody = ({}: Props) => {
  // const handleLikeButton = () => {
  //   setLikeSelected(data => !data);
  // };
  return (
    <Container>
      <ContentWrapper>{dummyData}</ContentWrapper>
      {/* <LikeButtonWrapper>
        <LikeButton onClick={handleLikeButton}>
          <IconWrapper likeSelected={likeSelected}>
            <AiTwotoneHeart />
          </IconWrapper>
          <TypoGraphy type="body3" color={customColor.gray}>
            추천하기
          </TypoGraphy>
        </LikeButton>
      </LikeButtonWrapper> */}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1178px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const LikeButtonWrapper = styled.div`
//   margin-top: 100px;
// `;

// const LikeButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   border: 2px solid ${customColor.gray};
//   border-radius: 9999px;
//   width: 100px;
//   height: 100px;
//   background-color: ${customColor.white};

//   :hover {
//     cursor: pointer;
//     background-color: ${customColor.grayLight};
//   }
// `;

// const IconWrapper = styled.div<{ likeSelected: boolean }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 50px;
//   margin-bottom: 5px;
//   color: ${({ likeSelected }) =>
//     likeSelected ? customColor.red : customColor.gray};
//   transition: 0.2s ease-in;
//   transform: ${({ likeSelected }) =>
//     likeSelected ? 'scale(1.1)' : 'scale(1)'};
// `;

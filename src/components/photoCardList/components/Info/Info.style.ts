import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
export const LikeWrapper = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-height: 2.4em;
  overflow: hidden;
`;

export const HeartWrapper = styled.div`
  margin-right: 2px;
`;

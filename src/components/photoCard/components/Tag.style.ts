import styled from 'styled-components';

export const TagWrapper = styled.div`
  display: flex;
`;
export const Tag = styled.div`
  max-width: 60px;
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 5px 5px 0 0;
  white-space: nowrap;
  border: solid 1px black;
  border-radius: 25px;
`;

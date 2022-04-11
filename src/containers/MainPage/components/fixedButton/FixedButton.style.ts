import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 99;
  top: 70vh;
  left: 85vw;
`;

export const BasicKnow = styled.div`
  display: flex;
  height: 100px;
  padding: 5px 10px 0 10px;
  align-items: center;
  text-align: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  background-color: #ececec;
  border-radius: 25px;
`;

export const TopButton = styled.div`
  background-color: #e5b299;
  display: flex;
  height: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  border-radius: 25px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;

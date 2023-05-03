import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- StyledComponents -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};
// styleを当てたcontainer
const SContainer = styled.div`
  border: solid 2px #ccd5ae;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #d4a373;
`;

const SButton = styled.button`
  background-color: #e9edc9;
  border: none;
  padding: 8px;
  border-radius: 8px;
`;

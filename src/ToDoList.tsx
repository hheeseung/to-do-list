import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const Title = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
`;

function ToDoList() {
  return (
    <Wrapper>
      <Title>To Do List</Title>
    </Wrapper>
  );
}

export default ToDoList;

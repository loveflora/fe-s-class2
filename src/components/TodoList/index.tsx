// 1. 외부 : node_modules
import { useState } from "react";
// 자동 import e 지우고 다시
import styled from "styled-components";

// 2. 내부 : 분리
import { INIT_DATA } from "./constants";
import Header from "../Header";
import { TodoItem } from "./types";
import Content from "../Content";
import Footer from "../Footer";
import useTodoData from "./useTodoData";

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const {
    todoListData,
    inputValue,
    setInputValue,
    notCheckListLength,
    onToggleData,
    onDeleteData,
    onCreateData,
  } = useTodoData();

  return (
    <Container>
      <Main>
        <Header notCheckListLength={notCheckListLength} />
        {/* option esc */}
        {/* props를 넘겨준다 : 상위 -> 하위 */}
        <Content
          onDeleteData={onDeleteData}
          onToggleData={onToggleData}
          todoListData={todoListData}
        />
        <Footer
          inputValue={inputValue}
          setInputValue={setInputValue}
          onCreateData={onCreateData}
        />
      </Main>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #dfe4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Main = styled.section`
  width: 480px;
  height: 80%;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  /* 부모 display - flex */
`;

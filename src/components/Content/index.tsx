import styled from "styled-components";
import { TodoItem } from "../TodoList/types";
import ListItem from "./components/ListItem";

export interface ContentProps {
  todoListData: TodoItem[];
  onToggleData: (idx: number) => void;
  onDeleteData: (idx: number) => void;
}
// Type[]
// 함수 type : () => void;

const Content: React.FC<ContentProps> = ({
  // props 안쓰고 {} 중괄호 사용
  // Header와 다름
  // 1. 객체   2. 풀어서 {}
  todoListData,
  onToggleData,
  onDeleteData,
}) => {
  return (
    <Container>
      <ul>
        {todoListData.map((v, i) => (
          <ListItem
            key={v.id}
            content={v.content}
            index={i}
            isCheck={v.isCheck}
            onToggleData={onToggleData}
            onDeleteData={onDeleteData}
          />
          // <li key={v.id} onClick={() => onToggleData(i)}>
          //   <input type="checkbox" checked={v.isCheck} />
          //   {/* <span>{v.isCheck ? "O" : "X"}</span> */}
          //   <p>{v.content}</p>
          //   <button
          //     onClick={(e) => {
          //       // 콜백함수
          //       e.stopPropagation();
          //       // li 부모태그 onClick도 함께 수행되는거 막음
          //       // (삭제 누르면 체크 수행되는 것도 막음)
          //       // 이벤트 전파 막음
          //       // 이벤트 버블링 캡쳐 ------ !!! 찾아보기
          //       onDeleteData(i);
          //     }}
          //   >
          //     삭제
          //   </button>
          // </li>
        ))}
      </ul>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100%;
  flex: 1;
  /* main - flex(부모) */
  padding: 20px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    display: flex;
    gap: 10px;
    cursor: pointer;

    span {
      font-weight: bold;
    }
  }
`;

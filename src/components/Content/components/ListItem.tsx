import styled from "styled-components";
import { ContentProps } from "..";
import { TodoItem } from "../../TodoList/types";

interface ListItemProps extends Omit<ContentProps, "todoListData"> {
  // omit : 제외하고 가져옴 (유틸리티 타입)
  // pick : 그것만 가져옴
  index: number;
  isCheck: boolean;
  content: string;
  // todoListData: TodoItem[];
  // onToggleData: (idx: number) => void;
  // onDeleteData: (idx: number) => void;
}
// extends : 합쳐줌

const ListItem: React.FC<ListItemProps> = ({
  onToggleData,
  onDeleteData,
  index,
  isCheck,
  content,
}) => {
  return (
    <li onClick={() => onToggleData(index)}>
      <input type="checkbox" checked={isCheck} />
      {/* <span>{v.isCheck ? "O" : "X"}</span> */}
      <p>{content}</p>
      <button
        onClick={(e) => {
          // 콜백함수
          e.stopPropagation();
          // li 부모태그 onClick도 함께 수행되는거 막음
          // (삭제 누르면 체크 수행되는 것도 막음)
          // 이벤트 전파 막음
          // 이벤트 버블링 캡쳐 ------ !!! 찾아보기
          onDeleteData(index);
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default ListItem;

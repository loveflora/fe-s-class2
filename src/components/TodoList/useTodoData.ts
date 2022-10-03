import { useState } from "react";
import { INIT_DATA } from "./constants";
import { TodoItem } from "./types";

export default function useTodoData() {
  const [todoListData, setTodoListData] = useState<TodoItem[]>(INIT_DATA);
  const [inputValue, setInputValue] = useState("");

  const notCheckListLength = todoListData.filter((v) => !v.isCheck).length;

  const onToggleData = (idx: number) => {
    const copy = [...todoListData];
    copy[idx].isCheck = !copy[idx].isCheck;
    setTodoListData(copy);
    // set 함수 써서 --> update --> 인식해서 리렌더링
  };

  const onDeleteData = (idx: number) => {
    const copy = [...todoListData];
    copy.splice(idx, 1);
    setTodoListData(copy);
  };

  const onCreateData = () => {
    if (!inputValue.length) {
      return;
    }
    // 빈 값이라면 업데이트 X
    const copy = [...todoListData];
    copy.push({
      id: new Date().getTime(),
      // id 값 : 임의로, 중복 X
      content: inputValue,
      isCheck: false,
    });
    setTodoListData(copy);
    // copy해서 계속 업데이트
    setInputValue("");
    // 빈 문자열 되도록 초기화
  };

  return {
    todoListData,
    inputValue,
    setInputValue,
    notCheckListLength,
    onToggleData,
    onDeleteData,
    onCreateData,
  };
}

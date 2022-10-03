import { useState } from "react";
import styled from "styled-components";
import { getJSDocDeprecatedTag, idText } from "typescript";
// 변수 - 패키지
// 패키지 - node안에 있음
// 모듈 시스템

// 스타일링 되어있는 div --> js
// styled.태그명``
const INIT_DATA = [
  { id: 0, content: "할 일 목록 1번", isCheck: false },
  { id: 1, content: "할 일 목록 2번", isCheck: false },
  { id: 2, content: "할 일 목록 3번", isCheck: true },
];

const dayOfWeekKR = ["일", "월", "화", "수", "목", "금", "토"];

// 컴포넌트
function App2() {
  // state: 컴포넌트 지탱하는 값 - 변화주는 값
  // 상태관리
  const [todoListData, setTodoListData] = useState(INIT_DATA);
  const [inputValue, setInputValue] = useState("");

  const notCheckList = todoListData.filter((v) => !v.isCheck).length;
  // 첫번째 값 : 초기값
  // [value, 값을 update시키는 함수]
  // useState 쓴건 : set 함수로 무조건 update 시켜야 !!!!!

  // 토글 함수
  const onToggleData = (idx: number) => {
    // useState : value -
    // 불변성: 변수를 함부로(직접적) 재할당 X
    // value 값 변경됨에 따라 리랜더링

    // 변경되는지 컴포넌트가 옵저
    // 변경되면 app 컴포넌트가
    const copy = [...todoListData];
    // todoList에 변화 주면 안됨

    copy[idx].isCheck = !copy[idx].isCheck;

    // 2) 다른 방법
    // const result = copy.map((v) => ({
    //   ...v,
    //   // ... 풀어쓴다
    //   // copy 돌면서 id 그대로 !
    //   isCheck: v.id === id ? !v.isCheck : v.isCheck,
    //   // true이면 false되는거임
    //   // 3번째 클릭하면 --> isCheck: v.id === 2 ? !v.isCheck : v.isCheck,
    // }));
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

  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    return {
      today: `${year}.${month}.${day}일`,
      // 템플릿 리터럴
      dayOfWeek: `${dayOfWeekKR[dayOfWeek]}요일`,
    };
  };

  return (
    <Container>
      <Main>
        <Header>
          <div>
            {/* flex 쓴다면 - div 추가해야함 (단점) */}
            {/* margin, padding */}
            <h2>{getDate().today}</h2>
            <h3>{getDate().dayOfWeek}</h3>
          </div>
          <p>할 일 {notCheckList} 개 남음</p>
        </Header>
        <Content>
          <ul>
            {todoListData.map((v, i) => (
              <li key={v.id} onClick={() => onToggleData(i)}>
                <span>{v.isCheck ? "O" : "X"}</span>
                <p>{v.content}</p>
                <button
                  onClick={(e) => {
                    // 콜백함수
                    e.stopPropagation();
                    // li 부모태그 onClick도 함께 수행되는거 막음
                    // (삭제 누르면 체크 수행되는 것도 막음)
                    // 이벤트 전파 막음
                    // 이벤트 버블링 캡쳐 ------ !!! 찾아보기
                    onDeleteData(i);
                  }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </Content>
        <Footer>
          <input
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
              // 키보드에 입력하는 value를 계속 업데이트
            }}
          />
          {/* onChange로 업데이트 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCreateData();
            }}
          >
            추가
          </button>
        </Footer>
      </Main>
    </Container>
  );
}

// { js 코드 쓸 수 있음 }
// { boolean && ...}
// jsx : html 안에 js 쓸수 있음

export default App2;

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

const Header = styled.header`
  width: 100%;
  height: 160px;
  padding: 40px 20px 20px;
  border-radius: 1px solid #666;
  border-bottom: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  /* 위에서 아래로 떨어지게 */
  justify-content: space-between;

  // SCSS 문법
  p {
    color: #0c8ce9;
    font-weight: bold;

    /* margin-top: 20px; */
    /* flex 꼭 써야하는건 아님 */
  }

  h3 {
    color: #999;
    font-weight: normal;
  }
`;

const Content = styled.div`
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

const Footer = styled.footer`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 8px input {
    flex: 1;
  }
`;

// 다음 시간에
// 1) day js -- library
// 2) update
// 3) 더 나은 방법

// + 리액트 문서 읽어보기 !!
// hook !!!!!! 주요개념
// useState
// useEffect

// 오늘 배운거 꼭 복습해오기 !!!

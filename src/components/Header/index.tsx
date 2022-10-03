import styled from "styled-components";
import { dayOfWeekKR } from "./constants";

// type 정의
interface HeaderProps {
  notCheckListLength: number;
}

const Header: React.FC<HeaderProps> = (props) => {
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
      <div>
        {/* flex 쓴다면 - div 추가해야함 (단점) */}
        {/* margin, padding */}
        <h2>{getDate().today}</h2>
        <h3>{getDate().dayOfWeek}</h3>
      </div>
      <p>할 일 {props.notCheckListLength} 개 남음</p>
    </Container>
  );
};

export default Header;

const Container = styled.header`
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

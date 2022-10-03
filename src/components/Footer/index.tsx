import styled from "styled-components";

export interface FooterProps {
  inputValue: string;
  setInputValue: (value: React.SetStateAction<string>) => void;
  onCreateData: () => void;
}

const Footer: React.FC<FooterProps> = ({
  setInputValue,
  onCreateData,
  inputValue,
}) => {
  return (
    <Container>
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
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 8px input {
    flex: 1;
  }
`;

import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  
  ul, li, ol {list-style: none}

html, body {
  width:100%;
  height:100%;
}
`;
// root

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
  // public - index.html - #root
);
root.render(
  <>
    {/* fragment : 빈 태그 ? */}
    <GlobalStyle />
    <App />
  </>,
);

// index - App - Todolist - Header

// 단방향 바인딩
// 위 -> 아래
// props

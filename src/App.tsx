import styled from "styled-components";
import TodoList from "./components/TodoList";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <TodoList />;
};

export default App;

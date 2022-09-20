import { Container } from "reactstrap";
import Counter from "./components/counter/counter";
import DarkMode from "./components/dark-mode/dark-mode";

function App() {


  return (
    <Container className="mt-5">
      <DarkMode/>
      <Counter/>
    </Container>
  );
}

export default App;

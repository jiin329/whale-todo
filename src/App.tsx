import "./App.css";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import { Provider } from "react-redux";
// import store from "./store";
import { applyMiddleware, createStore } from "redux";

function App() {
  const store = createStore(() => [], {}, applyMiddleware());

  return (
    <Provider store={store}>
      <div className="App">
        <Postform></Postform>
        <Posts></Posts>
      </div>
    </Provider>
  );
}

export default App;

import Community from "@pages/Community";
import Main from "@pages/Main";
import store from "@stores/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

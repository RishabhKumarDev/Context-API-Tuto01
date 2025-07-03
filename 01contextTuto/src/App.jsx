import Login from "./Component/Login";
import Profile from "./Component/Profile";
import MyContextProvider from "./Context/MyContextProvider";

function App() {
  return (
    <MyContextProvider>
      <h1>this is context TUTO 01,</h1>
      <Login />
      <Profile />
    </MyContextProvider>
  );
}

export default App;

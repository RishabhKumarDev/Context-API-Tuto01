import { useContext, useState } from "react";
import MyContext from "../Context/MyContext";

function Login() {
    const {setUser} = useContext(MyContext);


  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
       e.preventDefault();
       setUser({userName,password});
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="UserName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login in</button>
    </div>
  );
}

export default Login;

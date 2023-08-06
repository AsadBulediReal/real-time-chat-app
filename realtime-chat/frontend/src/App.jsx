import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatPage from "./ChatPage";

function App() {
  const [user, setUser] = useState({ username: "", password: "" });
  if (!user.username) {
    return (
      <AuthPage
        onAuth={(user) => {
          return setUser({ username: user.username, password: user.secret });
        }}
      />
    );
  } else {
    return <ChatPage user={user} />;
  }
}

export default App;

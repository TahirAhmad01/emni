import { useState } from "react";

export default function DashBoard() {
  //console.log(Auth)
  // eslint-disable-next-line no-use-before-define
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState("");

  const handleTextarea = (e) => {
    const value = e.target.value;
    setTodo(value);

    if (value.includes(".js")) {
      setWarning("js not alowed");
    } else setWarning("");
  };

  return (
    <div>
      <h1>This is Dashboard page</h1>
      {/* {Auth ? "You are logged in" : "You are logged out"} */}

      {/* <h1>{todo.Todo}</h1> */}
      <input
        placeholder=""
        value={todo}
        onChange={handleTextarea}
        style={warning ? { border: "2px solid red" } : undefined}
      />
      <h1>{warning || "Your Input is Ok"}</h1>
    </div>
  );
}

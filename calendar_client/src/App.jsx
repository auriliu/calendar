import "./css/index.css";

import Users from "./components/Users";

function App() {
  return (
    <div className="container">
      <div className="users">
        <Users />
      </div>
      <div className="calendar">
        <p>calendar</p>
      </div>
    </div>
  );
}

export default App;

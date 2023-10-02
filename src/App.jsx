import "./App.css";
import UserList from "./components/UserList";
import Header from "./components/header";
//https://randomuser.me/api/?results=5

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <UserList></UserList>
      </div>
    </>
  );
}

export default App;

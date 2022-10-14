
import './App.css';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SearchContact from "./components/SearchContact";

function App() {
  return (
    <div>
      <Navbar /> 
    <div className='main-chat-section'>
    <div className='chat-common-props'>
      <Profile />
    </div>
    <div className='chat-common-props bx-one-gray'>
      <SearchContact />
    </div>
    <div className='chat-common-props'>

    </div>
    </div> 
    </div>
  );
}

export default App;

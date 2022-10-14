
import './App.css';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SearchContact from "./components/SearchContact";
import Chat from "./components/Chat";

function App() {
  return (
    <div class="p-fixed">
      <Navbar /> 
    <div className='main-chat-section'>
    <div className='chat-common-props'>
      <Profile />
    </div>
    <div className='chat-common-props bx-one-gray'>
      <SearchContact />
    </div>
    <div className='chat-common-props'>
      <Chat />
    </div>
    </div> 
    </div>
  );
}

export default App;

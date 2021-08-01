import logo from './logo.svg';
import './App.css';

import ChatBody from './Components/ChatBody'

function App() {
  return (
    <>
      <div id="center-text">
        <h2>ChatBox UI</h2>
        <p>Message send and scroll to bottom enabled </p>
      </div>
      <div id="body">
        <ChatBody/>
      </div>
    </>
  );
}

export default App;

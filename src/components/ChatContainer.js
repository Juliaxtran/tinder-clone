import MatchesDisplay from "./MatchesDisplay"
import ChatHeader from "./ChatHeader"
import ChatDisplay from "./ChatDisplay"

const ChatContainer = (props) => {
  return (
  <div className = "chat-container">
    <ChatHeader />

    <div>
      <button className="option">Matches</button>
      <button className="option">Chats</button>
    </div>

    <MatchesDisplay />
    <ChatDisplay />

  </div>
  )
  }

  export default ChatContainer
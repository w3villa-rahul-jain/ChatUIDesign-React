import './Chat.scss';
import Conversation from './Conversation';

function Chat(){
    return(
        <section>
            <div className="conversation">
                <div className="your-conversation">
                    <h5>Your Conversation</h5>
                    <i class="fa-solid fa-trash"></i>
                </div>
                <div className="message-section">
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                </div>
                <div className="send-message">
                    <input type="text" className="chat-input" placeholder='Reply to Katy..'/>
                    <button className="send-message-btn"><i class="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        </section>
    )

}


export default Chat;
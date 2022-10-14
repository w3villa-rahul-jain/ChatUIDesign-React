import './Chat.scss';

function Chat(){
    return(
        <section>
            <div className="conversation">
                <div className="your-conversation">
                    <h5>Your Conversation</h5>
                    <i class="fa-solid fa-trash"></i>
                </div>
                <div className="message-section">
                   <p>message</p> 
                   <p>message</p> 
                   <p>message</p> 
                   <p>message</p> 
                   <p>message</p> 
                   <p>message</p> 
                   <p>message</p> 
                   <p>message</p> 
                   <p>message</p> 
                   <p>message</p> 
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
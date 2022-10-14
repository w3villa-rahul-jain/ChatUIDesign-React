import './Conversation.scss';
import User from '../images/user1.jpg';


function Conversation(){
    return(
        <div className="messages">
            <div className="sender-message">
                <div className="user">
                    <div className="user-picture">
                        <img src={User} />
                    </div>
                    <p>somya</p>
                </div>
                <ul>
                    <li>how are you</li>
                    <li>i am fine</li>
                </ul>
            </div>
            
            <div className="reciver-message">
                <ul>
                    <li>how are you</li>
                    <li>i am fine</li>
                </ul>
                <div className="user">
                    <div className="user-picture">
                        <img src={User} />
                    </div>
                    <p>somya</p>
                </div>
            </div>

        </div>

    )
}

export default Conversation;



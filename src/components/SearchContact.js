import './SearchContact.scss';
import User1 from '../images/user1.jpg';
import User2 from '../images/user2.jpg';
import User3 from '../images/user3.jpg';
import User4 from '../images/user4.jpg';


function SearchContact(){
    return(
        <section>
            <div class="main-search-section">
                <div className="search-contact">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="search" class="search-input" />
                </div>
                <div className="users">
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User2} alt=""/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User2} alt=""/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User2} alt=""/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User2} alt=""/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User1} alt=""/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User3} alt=""/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User4} alt=""/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                    
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User2} alt=""/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                    <div className="all-friends">
                        <div className="friend-image">
                        <img src={User4} alt="user-picture"/>
                        </div>
                        <div className="friend-text">
                            <h2>Kate pary</h2>
                            <p><div></div>online</p>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </section>
    )
}



export default SearchContact;
import './Profile.scss';
import User from '../images/user1.jpg';


function Profile(){
    return(
        <section>
            <div className="user-profile">
                <div className="profile-details">
                    <div className="profile-image">
                        <img src={User} alt=""/>
                    </div>
                    <div className="profile-text">
                        <p>somya singh</p>
                        <p class="user-designation">KPMG</p>

                    </div>
                </div>
                <div>
                    <ul className="list-container">
                        <li class="list-itemss"><i class="fa-solid fa-user skyblue"></i><a hrfe="#">Activity</a></li>
                        <li class="list-itemss"><i class="fa-solid fa-user skyblue"></i><a hrfe="#">Profile</a></li>
                        <li class="list-itemss"><i class="fa-solid fa-message red"></i><a hrfe="#">Message</a></li>
                        <li class="list-itemss"><i class="fa-solid fa-gear purple"></i><a hrfe="#">Activity</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )

    

}


export default Profile;
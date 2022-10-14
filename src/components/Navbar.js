import './Navbar.scss';



function Navbar(){
    return(
        <header className="bg-blue">
            <div className='container'>
                <div className='navigation'>
                    <div className='nav-menu'>
                    <i class="fa-solid fa-angle-left"></i>
                        <p>Menu</p>
                    </div>
                    <div className="nav-brands">
                        <div className="brands"></div>
                    </div>
                    <div className="search">
                        <div className="icon"><i class="fa-solid fa-magnifying-glass"></i></div>   
                    </div>
                </div>
            </div>
        </header>
    )

    
}


export default Navbar;
import "../css/ComponentsStyle/Navbar.css";
import { Link , useNavigate} from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import {TiSocialFacebook,TiSocialTwitter} from "react-icons/ti" ;
import {AiOutlineGooglePlus , AiOutlineSearch} from "react-icons/ai" ;

const Navbar = () => {
const navigate= useNavigate() ;
    return (
        <div className="navbar_container">
            <div className="left_navbar_section">
                <h1 className="navbar_title"><span className="first_part_navbar_title">BOLD</span>BLOG</h1>
            </div>
            <div className="middle_navbar_section">
                <nav className="navbar_links">
        
                        <Link className='navbar_link hover-underline-animation'>Home</Link>
                  
                        <Link className='navbar_link hover-underline-animation'>Featured</Link>
                    
                        <Link className='navbar_link hover-underline-animation'>Category</Link>
                   
                        <Link className='navbar_link hover-underline-animation'>Write</Link>

                        <Link className='navbar_link hover-underline-animation'>About</Link>
                </nav>
            </div>
            <div className="right_navbar_section">
                <div className="navbar_icons_section">
                   <div className="signup-navbar-btn">
                    <button onClick={()=>navigate('/signup')}>Sign Up</button>
                    </div>
                    <div className="login-navbar-btn">
                    <button onClick={()=>navigate('/login')}>Login</button>
                    </div>
                </div>
                <hr className="vertical_line"/>
                <div className="navbar_search">
                 <AiOutlineSearch className="icon_navbar"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
import Link from "next/link";
import Image from "next/image";
import logo from "../public/disney.png";

const Navbar = ({account:{username,avatar:{url}}}) => {
    return (
        <div className="navbar">
            <Link href="/">
                <Image src={logo} alt="Disney Logo" width="90" height="50" />
            </Link>
            <div className="account-info">
                <p>Welcome {username}</p>
                <img src={url} alt={username} className="avatar" />
            </div>
        </div>
    )
}

export default Navbar;
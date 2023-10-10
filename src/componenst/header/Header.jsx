import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/blogs">Blogs</Link>
    </div>
  )
}

export default Header;
import Airbnb from "../images/airbnblogo.jpg"
export default function Navbar(){
    return (
        <nav>
            <img src={Airbnb} className="nav--logo"></img>
        </nav>
    )
}
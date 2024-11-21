import logo from "../../assets/images/LOGO.svg";
import Nav from "../Nav/Nav.tsx";
import "./Header.scss";

export default function Header() {
	return (
		<header>
			<figure>
				<img className="logo" src={logo} alt="kasa logo" />
			</figure>
			<Nav/>
		</header>
	);
}
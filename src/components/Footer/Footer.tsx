import logo from "/src/assets/images/logo-footer.svg";
import "./Footer.scss";


export default function Footer() {
	return (
		<footer className="foot-container">
			<img src={logo} alt="logo de kasa" />
			<p className="foot-container_text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

import "./Collapse.scss";
import { useState, useRef, useEffect } from "react";
import arrowDown from "/src/assets/images/vectorBas.svg";



interface CollapseProps {
	title: string;
	text: string;
}

export default function Collapse({ title, text }: CollapseProps) {

	const [toggle, setToggle] = useState(false); 
	const [heightEl, setHeightEl] = useState<string>("0px"); 

	const toggleState = () => {		
		setToggle(!toggle);
	};

	const refHeight = useRef<HTMLDivElement>(null); // hauteur du collapse

	useEffect(() => {
		if (refHeight.current) {
			setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
		}
	}, []);

	const formattedText = text.split("|").map((item, index) => (
        <span key={index}>
            {item}
            <br />
        </span>
    ));

	return (
		<div className={`collapse_${title}`}>
			<div onClick={toggleState} className="collapse__header">
				<h2>{title}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={arrowDown}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				// style={{ height: toggle ? `${heightEl}` : "0px" }} 
				>
				<p>{formattedText}</p>
			</div>
		</div>
	);
}

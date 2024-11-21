import "./Banner.scss";

interface BannerProps {
	img: string;
	overlay: boolean;
	title?: string;
}

export default function Banner({ img, overlay, title }: BannerProps) {
	return (
		<div className="banner" role="banner">            
            <img src={img} alt="banner" className= {overlay ? "overlay-dark" : "overlay-light" }  /> 
            {title && <h1>{title}</h1> }
            
		</div>
	);
}
import { useEffect, useState } from "react";
import LogementCard from "../LogementCard/LogementCard";
import "./LogementGallery.scss";

interface Logement {
	id: string;
	title: string;
	cover: string;
	pictures: string[];
	description: string;
	hosts: {
		name: string;
		picture: string;
	};
	rating: number;
	location: string;
	equipments: string[];
	tags: string[];
}


export default function LogementGallery() {

	const [logements, setLogements] = useState<Logement[]>([]);

	async function getAllLogements() {
		const response = await fetch("http://localhost:8080/api/properties");
		if (!response.ok) {
			throw new Error("Failed to fetch logements");
		}
		return response.json();
	}
	
	useEffect(() => {
		getAllLogements()
			.then(data => setLogements(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<>
			<div className="logement-gallery-container">
				<div className="logement-gallery">
					{logements.map((logement, logementCard) => (
						<LogementCard title={logement.title} imageUrl={logement.cover} key={logementCard} 
										id={logement.id} />
					))}
						
			</div>
			</div>

		</>
	);
}
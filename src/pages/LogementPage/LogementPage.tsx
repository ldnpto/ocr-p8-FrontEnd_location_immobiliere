
import "./LogementPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Tags from "../../components/Tags/Tags";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";

interface Logement {
	cover: string;
	title: string;
	description: string;
	location: string;
	rating: string;
	equipments: string[];
	tags: string[];
	pictures: string[];
	host: {
		"name": string,
		"picture": string
	}
}

export default function LogementPage() {

	
	const { id } = useParams();

    const [selectedById, setSelectedById ] = useState(null);

	async function getLogementById () {
		
			const response = await fetch(`http://localhost:8080/api/properties/${id}`);
			if (!response.ok) {
				window.location.href = '/404';				
			}
			return response.json();		
	};

	useEffect(() => {
		getLogementById()
			.then(data => setSelectedById(data))
			.catch(error => console.error(error));
	}, []);

	if (selectedById == null) return <div>Loading...</div>
	const logementCourant = selectedById as Logement;

	const equipList =  logementCourant.equipments.join("|");
	
	

	return (
		<>
        <div className="logement">
            <Carousel slides={logementCourant.pictures} />

            <div className="logement__description">
                <div className="logement__description__top">
                    <div className="logement__description__top--info">
                        <h1> {logementCourant.title} </h1>
                        <h2> {logementCourant.location} </h2>
                        <div className="logement__description__top--block-tags">
							{logementCourant.tags.map((tag, key) => (
								<Tags text={tag} key={key} id={key} />
							))}
                        </div>
                    </div>

                    <div className="logement__description__top--host-block">
                        <div className="logement__description__top--host-block--host">
                            <h3> {logementCourant.host.name} </h3>
                            <img src={logementCourant.host.picture} alt={logementCourant.title} />
                        </div>
                        <div className="rating">
                            <Rating rating={parseInt(logementCourant.rating, 10)} />
                        </div>
                    </div>
                </div>

                <div className="logement__description--bottom">
                    <Collapse title="Description" text={logementCourant.description}></Collapse>
					<Collapse title="Equipement" text={equipList}>
                    </Collapse>
                </div>
            </div>
        </div>

		</>
	);
} 
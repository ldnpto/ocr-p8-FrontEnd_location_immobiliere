import "./Rating.scss";
import starActiveSvg from "/src/assets/images/star-active.svg";
import starInactiveSvg from "/src/assets/images/star-inactive.svg";

export default function Ratings({ rating }: { rating: number }) {

    function getRatingArray(rating: number): string[] {
        const ratingArray = Array(5).fill("inactive");
        for (let i = 0; i < rating; i++) {
            ratingArray[i] = "active";
        }
        return ratingArray;
    }

    const ratingArray = getRatingArray(rating);

	return (
		<>		
        {ratingArray.map((status, index) => (
            <img
                key={index}
                src={status === "active" ? starActiveSvg : starInactiveSvg}
                alt={status === "active" ? "Active star" : "Inactive star"}
                className="star"
            />
        ))}
		</>
	);
}

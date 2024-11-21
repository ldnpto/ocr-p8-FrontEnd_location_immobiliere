import "./Carousel.scss";
import { useState, useEffect } from "react";
import arrowLeft from "/src/assets/images/vector-left.svg";
import arrowRight from "/src/assets/images/vector-right.svg";

export default function Carousel({ slides }: { slides: string[] }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoScrollInterval, setAutoScrollInterval] = useState<ReturnType<typeof setInterval> | null>(null);

    const autoSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(autoSlide, 3000);
        setAutoScrollInterval(intervalId);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const stopAutoScroll = () => {
        clearInterval(autoScrollInterval ?? undefined);
    };

    const previousClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        stopAutoScroll();
    };

    const nextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        stopAutoScroll();
    };


    const currentSlide = slides[currentIndex];
    const numSlides = slides.length;
    const displayArrows = numSlides > 1;

	return (
        <div className="logement__carousel">
            <img className="logement__carousel--slider" src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
            {displayArrows && (
                <>
                    <img className="logement__carousel__arrowleft" src={arrowLeft} alt="Flèche de gauche" onClick={previousClick} />
                    <img className="logement__carousel__arrowright" src={arrowRight} alt="Flèche de droite" onClick={nextClick} />
                </>
            )}
            {displayArrows && (
                <div className="logement__carousel__slide-indicator">{`${currentIndex + 1}/${slides.length}`}</div>
            )}
        </div>
	);
}

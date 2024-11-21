import "./Tags.scss";


export default function Tags({ text, id }: { text: string, id: number }) {
	return (
		<p className="tags">{text}</p>
		
	);
}

require("./Purpose.css");

const Purpose = ({ purpose }) => {
	return (
		<div className={"purpose " + purpose.title.toLowerCase()}>
			<span>
				<img src={purpose.img} alt="Purpose icon" />
			</span>
			<h3>{purpose.title}</h3>
			<p>{purpose.description}</p>
		</div>
	);
};

export default Purpose;

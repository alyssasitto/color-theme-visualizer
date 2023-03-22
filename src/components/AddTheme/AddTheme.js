import { useState } from "react";

import ThemeModal from "../ThemeModal/ThemeModal";

require("./AddTheme.css");

const AddTheme = () => {
	const [showModal, setShowModal] = useState(false);

	const toggle = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="add-theme">
			<button className="add-btn dark-btn" onClick={() => toggle()}>
				Add theme
			</button>

			{showModal && <ThemeModal setShowModal={setShowModal} />}
		</div>
	);
};

export default AddTheme;

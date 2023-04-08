import { useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Colors from "./pages/Colors/Colors";
import ThemeTester from "./pages/ThemeTester/ThemeTester";

import GlobalStyle from "./design/GlobalStyle";

function App() {
	const theme = useSelector((state) => state.theme.value);

	return (
		<div className="app">
			<GlobalStyle theme={theme}></GlobalStyle>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/colors" element={<Colors />} />
				<Route path="/tester" element={<ThemeTester />} />
			</Routes>
		</div>
	);
}

export default App;

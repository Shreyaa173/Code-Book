import './App.css'
import Hom from './components/Hom';
import Template from "./components/Auth/Template"
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
		<Router>
			<div>
				<Routes>
					<Route
						path="/"
						element={<Hom />}
					/>
					<Route
						path="/signup"
						element={<Template formType={"signup"} />}
					/>
					<Route
						path="/login"
						element={<Template formType={"login"} />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App

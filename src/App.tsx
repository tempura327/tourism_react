import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import router from './router/index';
import Home from '../src/pages/Home';
import Activity from '../src/pages/Activity';
import Attraction from '../src/pages/Attraction';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/tourism_react' element={<Home />}></Route>
				<Route path='/tourism_react/activity' element={<Activity />}></Route>
				<Route path='/tourism_react/attraction' element={<Attraction />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

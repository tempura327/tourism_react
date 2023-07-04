// import { RouterProvider } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import router from './router/index';
import Home from '../src/pages/Home';
import Activity from '../src/pages/Activity';
import Attraction from '../src/pages/Attraction';

// function App() {
// 	return <RouterProvider router={router}></RouterProvider>;
// }

function App(){
	return (
		<BrowserRouter basename='/tourism'>
			<Routes>
				<Route path="/tourism" element={<Home/>}></Route>
				<Route path="/activity" element={<Activity/>}></Route>
				<Route path="/attraction" element={<Attraction/>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;

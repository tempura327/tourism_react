import {useNavigate} from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();

  return (
		<div>
			<h1>Home</h1>

			<button onClick={()=>{
				navigate('activity')
			}}>activity</button>

			<button onClick={()=>{
				navigate('attraction')
			}}>attraction</button>
		</div>
	);
}

export default Home;
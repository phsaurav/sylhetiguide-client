import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import NotFound from './containers/NotFound/NotFound';

function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Redirect to="/home"></Redirect>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/register">
						<Register></Register>
					</Route>
					<Route>
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;

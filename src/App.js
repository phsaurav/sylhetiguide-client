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
import NotFound from './containers/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen">
						<div>
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
								<Route>
									<NotFound></NotFound>
								</Route>
							</Switch>
						</div>
					</div>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;

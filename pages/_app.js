import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({
	Component,
	pageProps
}) {
	return <Component {
		...pageProps
	}
	/>;
}

export default MyApp;
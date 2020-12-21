import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { GlobalStyle } from '../globalStyles/globalStyles';

function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState);
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;

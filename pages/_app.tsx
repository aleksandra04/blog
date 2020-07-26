import { Provider } from 'react-redux';
import { useStore } from '../store/store';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

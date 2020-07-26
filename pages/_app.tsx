import { Provider } from 'react-redux';
import { useStore } from '../store/store';
import { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const store = useStore(pageProps.initialReduxState);

    return (
        <>
        <NextNprogress
        color="white"
        startPosition="0.2"
        stopDelayMs="200"
        height="2"
      />
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        </>
    );
}

import type { AppProps } from 'next/app';
import '../styles/globals.css';
// import { AuthProvider } from '../state/auth/AuthContext';

import { NextPageWithLayout } from './page.d';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;


import '../styles/globals.css';
import Footer from './footer.js';
import StoreProvider from '../store/store-context';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
      {/* <Footer /> */}
    </div>
  );
  
}

export default MyApp

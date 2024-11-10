import "../src/app/globals.css";

// INTERNAL IMPORT
import { Footer, NavBar } from "../Components";
import { CrowdFundingProvider } from '../Context/CrowdFunding';

export default function App({ Component, pageProps}) {
    return (
    <>
        <CrowdFundingProvider>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </CrowdFundingProvider>
    </>
    );
}
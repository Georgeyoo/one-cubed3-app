import { Link } from 'react-router-dom';
import Header from '../components/Header';
import RoadmapSection from '../components/RoadmapSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Landing() {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#171512] dark justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}
        >
            <div>
                <Header />

                {/* Hero Section */}
                <div className="@container">
                    <div className="@[480px]:px-4 @[480px]:py-3">
                        <div
                            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#171512] @[480px]:rounded-xl min-h-80"
                            style={{
                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF6LskCWrd92oleJL-6sOsn9Dc_IxuoMgb68Aeg02sb7ZD01tNScFD4eOtfFHEOBPa_C-jnai6MGw0fW0iL_Agno2DB87eHt-WXxSq159CWXz_Wa9HWpfWuEn4SuNTU5-ZB2WDVeJwORowOvu9YZlc4D_yIkwycLUg1TgLV926fvzVajiFFdP8_1KU9g5WtAPOoNBw6aceh-Ec1WeID8ti-FJ0oCg5NnWCeZdK8PfrrKJ72NJoahuQU38GW-mdJCCDU3q9DK7yDPw")'
                            }}
                        ></div>
                    </div>
                </div>

                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
                    cubed³ NFT Collection
                </h1>
                <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                    A collection of 10,000 unique digital collectibles living on the Ethereum blockchain.
                </p>

                <div className="flex px-4 py-3 justify-center">
                    <Link
                        to="/mint"
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f3e8cc] text-[#171512] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e6d9b8] transition-colors"
                    >
                        <span className="truncate">Go to dApp</span>
                    </Link>
                </div>

                <RoadmapSection />
                <FAQSection />
            </div>

            <Footer />
        </div>
    );
}


const Footer = () => {
    const productList = ["Market", "ERC20 Token", "Donation"];
    
    const contactList = [
        "support@cryptoking.com",
        "info@example.com",
        "Contact us",
    ];

    const usefulLink = ["Home", "About Us", "Company Bio"];

    return (
        <footer className="text-center text-white backgroundMain lg:text-left">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            Crypto King
                        </h6>
                        <p>
                            Crypto King is a decentralized platform that allows users to buy, sell, and trade cryptocurrencies.
                        </p>
                    </div>
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Products
                        </h6>
                        { productList.map((el, i) => (
                            <p className="mb-4" key={i+1}>
                                <a href="#!">{el}</a>
                            </p>
                        ))}
                    </div>
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Useful links
                        </h6>
                        { usefulLink.map((el, i) => (
                            <p className="mb-4" key={i+1}>
                                <a href="#!">{el}</a>
                            </p>
                        ))}
                    </div>
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        { contactList.map((el, i) => (
                            <p className="mb-4" key={i+1}>
                                <a href="#!">{el}</a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="backgroundMain p-6 text-center">
                <span>© 2024 Copyright : </span>
                <a className="font-semibold" href="/">
                    Crypto King
                </a>
            </div>
        </footer>
    )
}

export default Footer;

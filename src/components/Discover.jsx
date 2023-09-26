import Discover_card from "../cards/Discover_card";

const Discover = () => {
    const benefits = [{ title: 'Easy to use and access', desc: 'Forget the old and tedious task of storing data into hard copies. With this promising new technology, everyone can store and access their data seamlessly.' },
    { title: 'Portable data', desc: 'Your valuable documents are portable and can be accessed anywhere in any device.No more fear of losing the documents, they will always be present in the blockchain network.' },
    { title: 'Value for security and privacy', desc: 'Your privacy is our top goal. Every document you store in our E-Vault is encrypted and can be accessed only by its authorised owner.' }
    ];
    return (
        <>
            <h1 className="text-center">Discover the benefits</h1>
            <div className="flex flex-col items-center justify-around md:flex-row">
                {benefits.map((item) => <Discover_card title={item.title} desc={item.desc} />)}
            </div>
        </>
    );
}
export default Discover;
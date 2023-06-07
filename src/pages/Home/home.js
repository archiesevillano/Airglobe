import "./home.css";

const Home = () => {
    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="content-center">
                    <h1>Earth</h1>
                    <p>A Journey into the Heart of Nature</p>
                </div>
                <img className="earth-bg" src={"https://firebasestorage.googleapis.com/v0/b/airglobe-7d703.appspot.com/o/wp4729457-earth-4k-wallpapers.jpg?alt=media&token=3cca653b-205a-4079-aec8-f845a2410885"} loading="lazy" />
            </section>
        </div>
    );
}

export default Home;
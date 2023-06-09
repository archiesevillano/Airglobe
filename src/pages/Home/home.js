import RoundedButton from "../../components/RoundedButton/roundedButton";
import React, { useContext, useEffect } from 'react';
import { AppContent } from "../../sharedContent";
import "./home.css";
import InfoCard from "../../components/InfoCard/infoCard";

const Home = () => {
    const { contents } = useContext(AppContent); // get the state value from App Content Context

    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="content-center">
                    <h1 className="text-center">{contents?.hero?.caption}</h1>
                    <p className="text-center">{contents?.hero?.subCaption}</p>
                    <span className="text-center">{contents?.hero?.message}</span>
                    <RoundedButton roundness="pill" text="Explore" />
                </div>
                <img className="earth-bg" src={"https://firebasestorage.googleapis.com/v0/b/airglobe-7d703.appspot.com/o/wp4729457-earth-4k-wallpapers.jpg?alt=media&token=3cca653b-205a-4079-aec8-f845a2410885"} loading="lazy" />
            </section>
            <section className="ask-cards flex-lg-row flex-column justify-content-lg-evenly justify-content-center align-items-lg-baseline align-items-center">
                {
                    contents?.askCards?.map((item, index) => <InfoCard key={index + 1} heading={item?.heading} article={item?.article} image={item?.imageURL} moreToArticle={item?.moreArticle} articleSource={item?.articleSource} articleName={item?.articleSourceName} />)
                }
            </section>
        </div>
    );
}

export default Home;
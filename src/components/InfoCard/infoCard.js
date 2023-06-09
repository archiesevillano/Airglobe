import "./infoCard.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({ heading, article, image, moreToArticle, articleSource, articleName }) => {

    const [moreArticleVisibility, setArticleVisibility] = useState(false);

    const handleMoreArticleVisibility = () => {
        setArticleVisibility(!moreArticleVisibility); //sets the visibility of the rest of the article depending on the current value of more article visibility
    }

    return (
        <div className="info-card rounded">
            <header className="info-card-header">
                <h1 className="info-card-title">
                    {heading}
                </h1>
            </header>
            <section className="info-card-hero">
                <img src={image} className="info-card-hero-image" />
            </section>
            <article className={`more-article ${moreArticleVisibility ? "visible" : ""}`}>
                <div className="content">
                    {moreToArticle?.map((item, index) => <p key={index + 1} className="info-card-article-content">{item}</p>)}
                </div>
            </article>
            <article className="info-card-article">
                <button type="button" className="article-btn rounded-circle" onClick={handleMoreArticleVisibility}>
                    <i className={`fa-solid ${moreArticleVisibility ? "fa-xmark" : "fa-arrow-up-right-from-square"}`}></i>
                </button>
                <p className="info-card-article-content">
                    {article}
                </p>
            </article>
            <p className="article-source">
                <Link to={articleSource}>
                    <i className="fa-solid fa-at"></i>
                    {articleName}
                </Link>
            </p>
        </div>
    );
}

export default InfoCard;
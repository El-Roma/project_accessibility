import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => (
    <article className="article">
        <img src={`/images/${article.image}`} alt={`Illustration de ${article.title}`} className="img-article" />
        <div>
            <h2>{article.title}</h2>
            <p>Le ski c'est la vie.</p>
            <Link to={`/article/${article.id}`} aria-label={`Lire plus sur ${article.title}`}>Lire plus</Link>
            <Link to={`/article/${article.id}#comments`} aria-label={`Lire les commentaires sur ${article.title}`}>{article.comments} commentaires</Link>
        </div>
    </article>
);

export default Article;

import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({ article }) => (
    <article className="article">
        <img src={`/images/${article.image}`} alt={`Illustration for ${article.title}`} className="img-article" />
        <div>
            <h2>{article.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <Link to={`/article/${article.id}`}>Read more</Link>
            <Link to={`/article/${article.id}#comments`}>{article.comments} comments</Link>
        </div>
    </article>
);

export default Article;

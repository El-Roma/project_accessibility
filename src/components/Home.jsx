import React from 'react';
import Article from './Article';

const Home = () => {
    const articles = [
        { id: 1, title: "Article 1", image: "20c7a2a7b7.webp", comments: 5 },
        { id: 2, title: "Article 2", image: "download.webp", comments: 3 },
        { id: 3, title: "Article 3", image: "ski-sport-logo-vintage-vector-logo-Graphics-22202736-1.webp", comments: 10 },
    ];

    return (
        <section>
            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </section>
    );
};

export default Home;

import React from 'react';
import Article from './Article';

const Home = () => {
    const articles = [
        { id: 1, title: "Article 1", image: "20c7a2a7b7.webp", comments: 5 },
        { id: 2, title: "Article 2", image: "download.webp", comments: 3 },
        { id: 3, title: "Article 3", image: "TAL-lead-image-BESTSKIRESORTS1123-0aa37c27f819404b9a9da541f391d26a.webp", comments: 7 },
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

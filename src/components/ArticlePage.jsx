import React from 'react';
import {useParams} from 'react-router-dom';

const articles = [
    {id: 1, title: "Article 1", image: "20c7a2a7b7.webp", comments: 4},
    {id: 2, title: "Article 2", image: "download.webp", comments: 2},
    {id: 3, title: "Article 3", image: "ski-sport-logo-vintage-vector-logo-Graphics-22202736-1.webp", comments: 1},
];

const commentsData = [
    {
        id: 1, comments: [
            {name: "John Doe", date: "2024-05-01", comment: "Super article ! Très informatif."},
            {name: "Jane Smith", date: "2024-05-02", comment: "Merci pour ce post. Vraiment utile !"},
            {name: "Sam Wilson", date: "2024-05-03", comment: "J'ai une question sur la deuxième section."},
            {name: "Anna Lee", date: "2024-05-04", comment: "Peux-tu fournir plus de détails sur le sujet ?"},
        ]
    },
    {
        id: 2, comments: [
            {name: "John Doe", date: "2024-05-01", comment: "Super article ! Très informatif."},
            {name: "Jane Smith", date: "2024-05-02", comment: "Merci pour ce post. Vraiment utile !"}
        ]
    }, {
        id: 3, comments: [
            {name: "John Doe", date: "2024-05-01", comment: "Super article ! Très informatif."}
        ]
    },
];

const ArticlePage = () => {
    const {id} = useParams();
    const article = articles.find(article => article.id === parseInt(id));
    const comments = commentsData.find(data => data.id === parseInt(id))?.comments || [];

    if (!article) {
        return <p>Article non trouvé</p>;
    }

    return (
        <article>
            <b><h1>{article.title}</h1></b>
            <img src={`/images/${article.image}`} alt={`Illustration de ${article.title}`}/>
            <p>
                Le ski c'est la vie.
            </p>

            <table aria-label="Tableau des commentaires">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Date</th>
                    <th>Commentaire</th>
                </tr>
                </thead>
                <tbody>
                {comments.map((comment, index) => (
                    <tr key={index}>
                        <td>{comment.name}</td>
                        <td>{comment.date}</td>
                        <td>{comment.comment}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </article>
    );
};

export default ArticlePage;

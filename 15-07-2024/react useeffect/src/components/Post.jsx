import React, { useState, useEffect } from 'react';
import './Post.css';


function Post() {
    const [post, setPost] = useState(null);
    const [id, setId] = useState(() => {
        const savedId = localStorage.getItem('postId');
        return savedId ? parseInt (savedId, 10) : 1;
    });

    useEffect(() => {
        console.log('Cerco i dati del post...')
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Errore nel trovare il post:', error));
    }, [id]);

    useEffect(() => {
        localStorage.setItem('postId', id);
        console.log('Il postId è stato aggiornato nel local storage:', id);
    }, [id]);

    return (
        <div className="post-container">
            <h2>Post #{id}</h2>
            {post ? (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={() => setId(id - 1)} disabled={id <= 1}>
                Previous
            </button>
            <button onClick={() => setId(id + 1)} disabled={id >= 100}>
                Next
            </button>
        </div>
    );
}

export default Post;

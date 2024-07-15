import React, { useState, useEffect } from 'react';
import './Post.css';


function Post() {
    const [post, setPost] = useState(null);
    const [id, setId] = useState(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
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

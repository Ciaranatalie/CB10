const POST_API_URL = "https://jsonplaceholder.typicode.com/posts";
async function getMainHTML () {
    const sidebarHTML = getSidebarHTML();
    const postsHTML = getPostsHTML({posts});

    const posts = await fetch (POST_API_URL)
        .then((r) => r.json())
        .catch((e) => {
            console.error(e);
            return [];
        });

    
    
        console.log ({posts})
    
    return `
        <main>
            <div class="container">
                <div class="main-grid"> 
                ${sidebarHTML}
                ${postsHTML}
                </div>
            </div>
        </main>
    `;
}

function getSidebarHTML () {
    return `<aside>Sidebar</aside>`;
}

function getPostsHTML (props) {
    const {posts = []} = props;

    const postsHTML = posts
    .slice 
    .map (function (post) {
        return `
        <article role="listitem">
                <h3>${post.title}</h3>
                <div><small>by User ${post.userId}</small></div>
                <p>${post.body}</p>
            </article>
            
        `;
    })
    .join("");

        (post) => `
        <article role="listitem">
                <h3>${post.title}</h3>
                <div><small>by User ${post.userId}</small></div>
                <p>${post.body}</p>
            </article>
    )
    return `
    <section>
        <h2>Lista post</h2>
        <div role="List">
            <article role="listitem"></article>
                <h3>Titolo</h3>
                <p>Hucm bacdib nousdc</p>
            </article>
    
            <article role="listitem">
                <h3>Titolo</h3>
                <p>Hucm bacdib nousdc</p>
            </article>
        </div>
    </section>Lista post</section>`;
}


export {getMainHTML};
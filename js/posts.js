const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function setPost(data) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error(error);
    }
}

async function getPosts() {
    try {
        const response = await fetch(API_URL, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        const data = await response.json();
        const postLength = data.length;
        console.log(postLength);
    } catch (error) {
        console.error(error);
    }
}

async function getPost(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        const post = await response.json();
        const postMarkup = `
            <div class="posts-item" id="post-${post.id}">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
        postContainer.innerHTML += postMarkup;
    } catch (error) {
        console.error(error);
    }
}

let postIndex = 1;
getPosts();
getPost(postIndex);

const loadPost = document.getElementById('loadPost');

loadPost.addEventListener('click', function (e) {
    if (postIndex < postLength) {
        getPost(++postIndex);
    }
});

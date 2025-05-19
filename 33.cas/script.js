const postForm = document.getElementById('post-form');
const postsContainer = document.getElementById('posts-container');

postForm.addEventListener('submit', async e => {
  e.preventDefault();
  const title = document.getElementById('post-title').value;
  const body = document.getElementById('post-body').value;

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title, body, userId: 1 }),
    headers: { 'Content-type': 'application/json' },
  });

  const newPost = await response.json();
  displayPost(newPost);
  postForm.reset();
});

function displayPost(post) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');
  postDiv.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <div class="comments" id="comments-${post.id}"></div>
    <form class="comment-form" data-post-id="${post.id}">
      <input type="text" placeholder="Your comment" required />
      <button type="submit">Add Comment</button>
    </form>
  `;
  postsContainer.prepend(postDiv);

  const commentForm = postDiv.querySelector('.comment-form');
  commentForm.addEventListener('submit', async e => {
    e.preventDefault();
    const commentInput = commentForm.querySelector('input');
    const commentText = commentInput.value;
    const postId = commentForm.getAttribute('data-post-id');

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/comments',
      {
        method: 'POST',
        body: JSON.stringify({ body: commentText, postId }),
        headers: { 'Content-type': 'application/json' },
      }
    );

    const newComment = await response.json();
    displayComment(postId, newComment);
    commentInput.value = '';
  });
}

function displayComment(postId, comment) {
  const commentsDiv = document.getElementById(`comments-${postId}`);
  const commentDiv = document.createElement('div');
  commentDiv.classList.add('comment');
  commentDiv.textContent = comment.body;
  commentsDiv.appendChild(commentDiv);
}

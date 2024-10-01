function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((Response) => Response.json())
    .then((data) => displayPost(data));
}

function displayPost(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: Title- ${post.title}</h5>
        <p>Post Description- ${post.body}</p>
      `;
    postContainer.appendChild(postDiv);
  }
}

loadPosts();


document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('http://localhost:3000/posts'); // Обращаемся к правильному эндпоинту
  const posts = await response.json();

  const postsList = document.getElementById('posts-list');

  posts.forEach(post => {
    const listItem = document.createElement('li');
    listItem.textContent = `${post.title}: ${post.content}`;
    postsList.appendChild(listItem);
  });
});

console.log('Hello, webpack!');

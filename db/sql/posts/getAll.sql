SELECT posts.*, users.username
FROM posts
INNER JOIN users
ON posts.ownerId = users.id;

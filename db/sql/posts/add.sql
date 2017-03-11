INSERT INTO posts (
  ownerId,
  title,
  content
)
  VALUES (
    (SELECT id FROM users WHERE username = ${owner}),
    ${title},
    ${content}
  );

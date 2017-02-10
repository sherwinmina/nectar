INSERT INTO posts (owner, title, content)
  VALUES (
    (SELECT id FROM users WHERE username = ${owner}),
    ${title},
    ${content}
  );

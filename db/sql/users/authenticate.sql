SELECT username, id
FROM users
WHERE username = ${username}
AND password = crypt(${password}, password);

INSERT INTO users (username, password, email)
  VALUES (
    ${username},
    crypt(${password}, gen_salt('bf', 8)),
    ${email}
  );

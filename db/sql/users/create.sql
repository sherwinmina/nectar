CREATE TABLE users (
  id bigserial PRIMARY KEY,
  username varchar(50) NOT NULL UNIQUE,
  password text,
  email text NOT NULL UNIQUE,
);

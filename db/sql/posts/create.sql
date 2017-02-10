CREATE TABLE posts (
  id uuid gen_random_uuid() UNIQUE NOT NULL,
  owner bigserial NOT NULL REFERENCES users,
  title text NOT NULL,
  content text NOT NULL
);

DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts (
  id uuid UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  ownerId bigint NOT NULL REFERENCES users,
  title text NOT NULL,
  content text NOT NULL
);

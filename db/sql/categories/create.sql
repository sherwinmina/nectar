CREATE TABLE categories (
  id serial PRIMARY KEY,
  title text NOT NULL,
  parentCategory integer REFERENCES categories
);

CREATE TABLE categories (
  id serial PRIMARY KEY,
  title text NOT NULL,
  parentCategory serial REFERENCES categories
);

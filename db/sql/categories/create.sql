DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id serial PRIMARY KEY,
  title text NOT NULL,
  parentCategoryId integer REFERENCES categories
);

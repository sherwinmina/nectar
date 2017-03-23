DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
  id uuid UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  ownerId bigint NOT NULL REFERENCES users,
  category integer NOT NULL REFERENCES categories,
  subcategory integer REFERENCES categories,
  type text,
  title text NOT NULL,
  description text NOT NULL,
  price money NOT NULL,
  inStock integer NOT NULL
);

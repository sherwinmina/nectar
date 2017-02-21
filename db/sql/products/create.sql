CREATE TABLE products (
  id uuid UNIQUE NOT NULL DEFAULT gen_random_uuid(),
  owner bigserial NOT NULL REFERENCES users,
  category integer NOT NULL REFERENCES categories,
  subCategory integer NOT NULL REFERENCES categories,
  type text, 
  title text NOT NULL,
  description text NOT NULL,
  price money NOT NULL,
  inStock integer NOT NULL
);

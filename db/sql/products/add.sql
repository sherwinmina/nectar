INSERT INTO products (
  ownerId,
  category,
  subCategory,
  type,
  title,
  description,
  price,
  inStock
)
  VALUES (
    (SELECT id FROM users WHERE username = ${owner}),
    (SELECT id FROM categories WHERE title = ${category}),
    (SELECT id FROM categories WHERE title = ${subcategory}),
    ${type},
    ${title},
    ${description},
    ${price},
    ${inStock}
  );

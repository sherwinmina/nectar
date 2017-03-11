SELECT products.*, users.username
FROM products
INNER JOIN users
ON products.ownerId = users.id;

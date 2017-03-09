SELECT products.*, user.username
FROM products
INNER JOIN user
ON products.ownerId = user.id;

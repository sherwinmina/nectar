SELECT a.*, b.title AS parentTitle
FROM categories AS a
LEFT OUTER JOIN categories AS b
ON a.parentCategoryId = b.id;

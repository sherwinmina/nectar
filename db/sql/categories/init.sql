-- WITH parentCategoryIdRecursive AS (
--   INSERT INTO categories (
--     title,
--     parentCategoryId
--   )
--     VALUES (
--       ('Beer', NULL),
--       ('Cider', NULL),
--       ('Wine', NULL),
--       ('Spirits', NULL)
--     )
-- )
-- SELECT * FROM parentCategoryIdRecursive;


INSERT INTO categories (
  title,
  parentCategoryId
)
  VALUES
    ('Beer', NULL),
    ('Cider', NULL),
    ('Wine', NULL),
    ('Spirits', NULL)
;

INSERT INTO categories (
  title,
  parentCategoryId
)
  VALUES
    ('Mead', (SELECT id FROM categories WHERE title = 'Wine'))
;

INSERT INTO products (
  ownerId,
  category,
  subcategory,
  type,
  title,
  description,
  price,
  inStock
)
  VALUES
    (
      (SELECT id FROM users WHERE username = 'Nick'),
      (SELECT id FROM categories WHERE title = 'Wine'),
      Null,
      'Mead',
      'Raspberry Blossom Still Mead.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      20.50,
      36
    ),
    (
      (SELECT id FROM users WHERE username = 'Scott'),
      (SELECT id FROM categories WHERE title = 'Beer'),
      Null,
      'IPA',
      'Newton Sauv Double IPA.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      11.23,
      48
    ),
    (
      (SELECT id FROM users WHERE username = 'Julie'),
      (SELECT id FROM categories WHERE title = 'Wine'),
      Null,
      'Mead',
      'Meadowfoam Sparkling Mead.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      40.33,
      20
    ),
    (
      (SELECT id FROM users WHERE username = 'Sarah'),
      (SELECT id FROM categories WHERE title = 'Beer'),
      Null,
      'Brown Ale',
      'Acorn Brown Sour Ale.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      12.45,
      15
    ),
    (
      (SELECT id FROM users WHERE username = 'Andrew'),
      (SELECT id FROM categories WHERE title = 'Beer'),
      Null,
      'Pisner',
      'Traditional Organic German Pilsner.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      7.40,
      40
    ),
    (
      (SELECT id FROM users WHERE username = 'Zack'),
      (SELECT id FROM categories WHERE title = 'Beer'),
      Null,
      'English Ale',
      'English Single Malt Single Hopp Ale.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      5.20,
      60
    ),
    (
      (SELECT id FROM users WHERE username = 'Melba'),
      (SELECT id FROM categories WHERE title = 'Cider'),
      Null,
      'Apple Cider',
      'Gravenstein Sparkling Cider.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      22.22,
      39
    ),
    (
      (SELECT id FROM users WHERE username = 'Liz'),
      (SELECT id FROM categories WHERE title = 'Spirits'),
      Null,
      'Whiskey',
      'American Single Malt Whiskey',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      70.00,
      15
    ),
    (
      (SELECT id FROM users WHERE username = 'Ned'),
      (SELECT id FROM categories WHERE title = 'Beer'),
      Null,
      'Scottish Ale',
      'Scottish Red Ale',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      6.69,
      32
    ),
    (
      (SELECT id FROM users WHERE username = 'Cassie'),
      (SELECT id FROM categories WHERE title = 'Cider'),
      Null,
      'Tayberry Cider',
      'Tayberry Still Cider',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      13.99,
      56
    )
  ;

INSERT INTO users (
  username,
  password,
  email
)
  VALUES
    (
      'Nick',
      crypt('Nick', gen_salt('bf', 8)),
      'nick@gmail.com'
    ),
    (
      'Scott',
      crypt('Scott', gen_salt('bf', 8)),
      'scott@gmail.com'
    ),
    (
      'Julie',
      crypt('Julie', gen_salt('bf', 8)),
      'julie@gmail.com'
    ),
    (
      'Sarah',
      crypt('Sarah', gen_salt('bf', 8)),
      'sarah@gmail.com'
    ),
    (
      'Andrew',
      crypt('Andrew', gen_salt('bf', 8)),
      'andrew@gmail.com'
    ),
    (
      'Zack',
      crypt('Zack', gen_salt('bf', 8)),
      'zack@gmail.com'
    ),
    (
      'Melba',
      crypt('Melba', gen_salt('bf', 8)),
      'melba@gmail.com'
    ),
    (
      'Liz',
      crypt('Liz', gen_salt('bf', 8)),
      'liz@gmail.com'
    ),
    (
      'Ned',
      crypt('Ned', gen_salt('bf', 8)),
      'ned@gmail.com'
    ),
    (
      'Cassie',
      crypt('Cassie', gen_salt('bf', 8)),
      'cassie@gmail.com'
    )
  ;

** Authentication **

Goals:

- Use the `bcrypt` gem to add password to a `User` model
    - uncomment `bcrypt` gem
    - add `has_secure_password` to `User` model
    - add a `password_digest` column to the `User` model
- Add ability to create a new user through the web interface
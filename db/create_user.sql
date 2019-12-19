INSERT INTO users (username, email, password)
VALUES ($1, $2, $3);

SELECT user_id, username, email FROM users
WHERE email = $2;
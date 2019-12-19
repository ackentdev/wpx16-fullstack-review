-- for reference if I ever need to reset my database
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS memes;
DROP TABLE IF EXISTS favorites;


-- setting up schema by creating tables
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    profile_pic TEXT DEFAULT 'https://api.time.com/wp-content/uploads/2019/08/mocking_spongebob.jpg',
    email VARCHAR(80) NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE memes(
    meme_id SERIAL PRIMARY KEY,
    img_url TEXT NOT NULL,
    category VARCHAR(20)
);

CREATE TABLE favorites(
    favorites_id SERIAL PRIMARY KEY,
    meme_id INT REFERENCES memes(meme_id),
    user_id INT REFERENCES users(user_id)
);

-- dummy data
INSERT INTO memes(img_url, category)
VALUES
('https://www.watchmojo.com/uploads/blipthumbs/WM-TV-Top10-Patrick-Star-Quotes_Z1Q8Q6-720p30-3_480.jpg', 'spongebob'),
('https://miro.medium.com/max/659/1*8xraf6eyaXh-myNXOXkqLA.jpeg', 'news'),
('https://i.redd.it/sirev0m8tk541.jpg', 'tech'),
('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhcakwzQWET2NIDmbvtRs1pV58B0_xsnbSBIs-9Wl5ijAVMVL&s', 'pokemon');
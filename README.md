# Pinterest.... but for memes

# features
- display pictures
- delete pictures
- save memes
- share memes
- organize memes into categories
    - mom approved memes
    - memes for work
    - memes for myself when I have no friends

## ***DATABASE***

- users
```sql

```

- memes


## ***SERVER***

### dependencies
- express
- express-session
- dotenv
- bcrypt
- massive

### endpoints
***auth***
 - login: => /auth/login
 - register: => /auth/register
 - logout: => /auth/logout
 - userSession: => /api/user_session

***meme controller***
- getMeme: => /api/get_memes
- deleteMeme: => /api/delete_meme/:memeId
- postMeme: => /api/post_meme
- searchByCat: => /api/search
- updateMeme: => /api/update_category/:memeId

## ***CLIENT***


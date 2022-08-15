# Captsone-Crop-Swap

Capstone-Crop-Swap is a RESTful API built in Express/Node.js that uses ORM Sequelize and a Posgtres database manager, which is integrated with [CropSwap](https://github.com/lkleinert/Capstone-Crop-Swap-Frontend), a front-end React web application that allows users to search, post, and message about their excess backyard garden produce. Capstone-Crop-Swap has been deployed to [Heroku](https://crop-swap-backend.herokuapp.com/users).

# Features

* CRUD RESTful API routes for users and crops 
* Password authentication using bcrypt and JSON webtoken


## Dependencies

* node.js
* express
* postgres
* sequelize
* sequelize-cli
* cors
* pg
* pg-hstore
* dotenv
* bcrypt
* jswonwebtoken
* morgan


## Installation

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Ensure Postgres is installed on local machine.
4. Create .env file for following environmental variables: POSTGRES_DB_DEV, POSTGRES_DB_TEST, POSTGES_DB_PRODUCTION, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT (5432), POSTGRES_HOST (127.0.0.1), PORT (3000).
5. Create appropriate databases in Postgres.
6. Run ```npx sequelize-cli db:migrate``` to create Postgres tables. Refer to [Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/) documentation, if needed .
7. Run ```npx sequelize-cli db:seed:all``` to create seed data, if desired.
8. Start server by using command `npm start`. Open [http://localhost:3000](http://localhost:3000) to view app in browser.


## API Endpoints

| Verb  | Path  | Body of Request | Action  |
|---|---|---|---|
| `GET`  | `/users` <br> optional query params: `zipcode: integer, crop: text` | None | Retrieves a list of users  |
| `POST`  | `/users`  | `{firstName: text, lastName: text, userName: text, password: text, zipcode: integer}` <br> optional key: `bio: text`  | Posts a new user |
| `GET`  | `/users/username`  | None | Retrieves a specific user |
| `PATCH`  | `/users/username`  | `{attributeToPatch: value}` <br> attributes that can be patched include: password, firstName, lastName, bio | Updates data of an existing user |
| `GET`  | `/users/username/crops`  | None | Retrieves a list of crops associated with a user  |
| `POST`  | `/users/username/crops`  | `{available: text, quantity: text}` <br> optional key to be used if crop is growing vs. available: `growing: text` | Creates a crop associated with a user  |
| `PATCH`  | `/users/username/crops/cropId` |`{available: text, quantity: text}` <br> optional key to be used if crop is growing vs. available: `growing: text` | Updates a crop associated with a user  |
| `DELETE`  | `/users/username/crops/cropId` | None  | Deletes a crop associated with a user  |
| `GET`  | `/users/username/messages` <br> required query params: `authUser = text`  | None  | Gets a list of messages between an authorized/logged-in user and another user |
| `POST`  | `/users/username/messages` <br> required query params: authUser = loggedInUsername  | `{message: text}`  | Gets a list of messages between 2 users |
| `GET`  | `/login` <br> |   |  |
| `GET`  | `/verified` <br>  | | |





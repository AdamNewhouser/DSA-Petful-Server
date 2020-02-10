# Petful Server

Live: https://adam-petful.now.sh/

Client Repo: https://github.com/AdamNewhouser/DSA-Petful-Client

Server Repo: https://github.com/AdamNewhouser/DSA-Petful-Server

Adam Newhouser

Petful is an easy to use pet adoption site. We have dogs and cats available for adoption. We have a 'First In First Out' policy here at Petful. This means that we only have one dog and one cat available to adopt at a time. Only the cat and dog that have been at our shelter the longest are available for adoption.

Tech Used: Node.js

API Documentation:

    API BASE URL: https://lit-ravine-76962.herokuapp.com/api

- GET /pets/cats
- GET /pets/dogs
- GET /users
- POST /pets/cats
- POST /pets/dogs
- POST /users
- DELETE /pets/cats
- DELETE /pets/dogs
- DELETE /users



## How do set up?

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.

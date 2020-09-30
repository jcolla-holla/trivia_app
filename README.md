# [Play Here! -- Heroku link](https://trustlayer-trivia.herokuapp.com/#/)

## This was a coding challenge completed within a few days.  

### The prompt and specification I was given was the below:

Implement a simple Trivia Game

This API will give you 10 random trivia questions:

https://opentdb.com/api.php?amount=10

 1. Build a simple app that displays these questions in a list, where each list item contains:
      1. The text `Category: "{category}" | Difficulty: "{difficulty}"`
      2. The question, in a h2 element
      3. Each answer in a `<button>` element, displayed in random order.
      4. Display one question at a time, with prev/next buttons
 
 2. When the player clicks on the answer, add a `.correct` or `.wrong` class to the
     list item that wraps the question, based on the correctness of the answer.
     Disable all the buttons once the answer is given.
 
 3. Add the following logic for the score keeping:
      1. The player starts with 24 points. The goal is to reach 0.
      2. If they click on the right answer, we subtract 2 points if the question was easy, 4 if medium, 8 if hard.
         If they click on the wrong answer, we add 2 points if the question was easy, 4 if medium, 8 if hard.
      3. If they reach a score of exactly 0, display a "Game Over" message, and the number of answers given.
      4. Display the current score and the number of answers given in the top-right corner of the page.
 
  4. Add a Leaderboard
      1. At the end of the game, ask the player their username and password and save it to a storage of your choice.
      2. Display the leaderboard with the top 10 players: their username, the date and their lowest number of answers.
      3. Display a "Play again!" button, that starts a new game.
      4. Once the user is in the system, they should be able to logout and access again with their username and password.

-----
 

## Technologies Used:

### Frontend
- [React 16.13.1](https://www.npmjs.com/package/react) - as frontend framework
- [React-Bootstrap 1.3.0](https://react-bootstrap.github.io/) - for styling and UI components
- [Redux 4.0.5](https://redux.js.org/) - for frontend state management
- [Node-Sass 4.14.1](https://www.npmjs.com/package/node-sass) - for styling

### Backend
- [express 4.17.1](https://www.npmjs.com/package/express) - for HTTP server and REST API routing
- [MongoDB Atlas 4.2.8](https://docs.atlas.mongodb.com/) - for data storage
- [mongoose 5.10.0](https://mongoosejs.com/) - for schema-based MongoDB models, validations, etc

### Auth
- [jwt-decode 2.2.0](https://www.npmjs.com/package/jwt-decode) - for auth token generation
- [bcryptjs 2.4.3](https://www.npmjs.com/package/bcryptjs) - for password encryption
- [jsonwebtoken 8.5.1](https://www.npmjs.com/package/jsonwebtoken) - for auth verification
- [passport 0.4.1](https://www.npmjs.com/package/passport) - for authentication middleware

## Room for Improvement:
- Security improvements (making some API endpoints protected, XSS, SQL injection protections, etc.)
- Better styling generally (I'm not a designer!)
- A mobile experience of some kind by using landscape view on phone
- Some better transition animations between cards (it's a bit wonky currently)




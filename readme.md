# Social Network Backend

## Description

This is a backend API for a social network. It includes routes for adding users, posts(thoughts), comments on posts(reactions), 
and the ability to friend other users

## Installation
This project requires node and mongoDB, order to install follow the steps below.

- Clone this repository
- in your command line in the cloned folder initiallize with npm install

## Usage

TO load the application uses the npm start command in your command line to start a localhost.

## Routes

User 
- Get all users: GET /api/users
- Create a user: POST /api/users
- Get user by ID: GET /api/users/:id
- Update a user: PUT /api/users/:id
- Delete a user: DELETE /api/users/:id

friend
- Add a friend: PUT /api/users/:userId/friends/:friendId
- Delete a friend: DELETE /api/users/:userId/friends/:friendId

Thoughts
- Get all thoughts: GET /api/thoughts
- Create a thought: POST /api/thoughts
- Get thought by ID: GET /api/thoughts/:id
- Update a thought: PUT /api/thoughts/:id
- Delete a thought: DELETE /api/thoughts/:id

Reactions
- Add a reaction: PUT /api/thoughts/:id/reactions
- Delete a reaction: DELETE /api/thoughts/:id/reactions

## Demo

![gif](./assets/first.gif)
![gif](./assets/second.gif)


## Collaborators
Greg D'Amato


  
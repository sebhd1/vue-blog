# Vue - blog

# Simple Vue Blog App with Authentication

This is a basic Vue.js blog application that includes an authentication system. 
The application allows users to create, read, update, and delete blog posts. 
Users can also register, log in, and log out using the authentication system. 
The app uses Vue.js for the frontend.

## Features

- User authentication (register, log in, log out).
- Create, read, update, and delete blog posts.
- View a list of blog posts on the home page.
- Add comments to a blog post.
- Responsive design for various screen sizes (bonus).



## Authentication 

A Register component must be created in order to handle the registration, it would accept the name, email, password, password_confirm.

A Login component must be created in order to handle the login functionality, it would only accept email and password.
- it must emit an event in app to verify that the user exits in registeredUser array and if so, assign a currentUser status.

ps: the logout functionality does not need to be handled via separated component. 

 
## CMS (blogging)

A post is defined as follows: title (`string`), slug (`string`), content (`string`), author {id: `string(UUID)`, name: `string`} and comment (`string`). 

A Home component showing the homepage of the app (home must be visible in or out the blog).

A PostIndex component containing all the posts created. 

A Post component only to show the post. 

A PostForm component must accept Post as prop in order to decide whether it has to create a new post or editing an existing (if owned), it would accept the title, slug, description.

A delete functionality that enables the user to delete the post (if owned). 

## Mock Data

The application uses a mock JSON file `public/posts.json` to simulate a database of blog posts. Each post has a title, slug, description, author, and comments.

## Router system 

Routes for this app must be defined in a `routes.js` file in the `src` directory. 


# Bonus - try to user LocalStorage to store the posts instead of retrieving them from JSON. 
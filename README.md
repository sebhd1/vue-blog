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
- Click on a blog post to view its details.
- Add comments to a blog post.
- Responsive design for various screen sizes (bonus).


## Authentication 

A Register component must be created in order to handle the registration, it would accept the name, email, password1, password2.

A Login component must be created in order to handle the login functionality, it would only accept email and password.
- login must verify whether the user exists or not, if exists the user can log in and show the Home (component)
- it must emit an event in app to verify that the user exits in registeredUser array and if so, assign a currentUser status.

ps: the logout functionality does not need to be handled via separated component. 


## Blogging 

A Home component, containing all posts created. 

A Post component only to show the post. 

A PostForm component must accept Post as prop in order to decide whether it has to create a new post or editing an existing, it would accept the title, slug, description.

A delete functionality that enables the user to cancel the post. 

## Mock Data

The application uses a mock JSON file (src/assets/posts.json) to simulate a database of blog posts. Each post has a title, content, author, and comments.

## Route system 

Routers for this app must be defined in a `router.js` file in the `src` directory. 
Make sure that components can accept props. 
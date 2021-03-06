# express-basic-server

In this exercise, you will create an Express server that serves static files and responds to a get request with data.

## Part One: Create a static server

### Setup

1. Fork and clone this repo
2. touch app.js
3. npm init
4. npm i express -S
5. echo node_modules > .gitignore
6. git add .
7. git commit -m ‘initial commit'
8. Git push origin master

### Create a server in app.js

* Require Express and initialize an app
* Use `express.static()` to mount the directory that will serve static files
* Create the directory that you're referencing above
* Create an html and a css page in your static directory - don't spend much time styling - do just enough to check that everything is connected
* Use `app.listen` to bind and listen for connections on the specified port
* Check that this works by running `nodemon app.js in your directory
* Git add, commit, push


## Part Two: Define a GET route at '/someanimal'

* Use your notes and the Express docs to create a route that returns some kind of data when a user sends a GET request to '/someanimal' 

## Part Three: Create a client that sends an ajax request to the server

* In a seperate git repo create a client project that has a simple html page and sends an ajax call to the API you created in step 2. Run your client on http-server. These do not have to be deployed. You can send a request from one port to another.  Just run the servers in different terminal windows.

## Submit your work

* Paste a link to your client side repo here: ____

* Make sure you add, commit and push all your changes to your fork of this repo and paste a link to it in [Workbook](https://workbook.galvanize.com/cohorts/66/articles/2945)

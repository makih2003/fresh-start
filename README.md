# Welcome to Fresh Start

By Maki Hosokawa and Miguel Fierro :)

This is a MERN app for users to anonymously share their goals and dreams. You can share however many resolutions you want and find inspiration in other's ideas. Every entry is saved into a database that's accessed with ExpressJS via a React application running with Node.

## File structure

   <blockquote>
   /fresh-start <br>
      ├── /fresh-start-frontend <br>
      ├── /fresh-start-backend <br>
      ├── README.md <br>
   </blockquote>


## To run the application

1. Clone the repository from: https://github.com/makih2003/fresh-start.git
2. Go into the **fresh-start-backend** folder.
3. Add a **.env** file to the folder. Make sure the file is at the same level as **server.js**.
4. Add the following lines to the **.env** file:
   ``` bash
    PORT=3500
    MONGO_URI=mongodb+srv://freshstartdevs:fallhacks2023@cluster0.6dhau2a.mongodb.net/?retryWrites=true&w=majority
   ```
5. Run ``` npm install ``` from inside the **fresh-start-backend** folder.
6. Run ``` npm run dev ``` to run the backend of the application.
   You know it's successful if the message ``` connected to DB & listening on port 3500 ``` appears on the terminal.
7. Open a new terminal.
8. Go to the **fresh-start-frontend** folder and run ``` npm install ``` in it.
9. Finally, still inside the **fresh-start-frontend** folder, run ``` npm start ```.
   The web page should open in your default browser :)

## To use the application
1. Enter a new goal, dream, resolution, etc. into the input box. (If it's not PG-13 it will not be accepted)
2. See what other users are wishing to change soon, maybe you can pick one of those too? 

We hope you enjoy our application!

# NetFlixGpt

- Vite 

- congig TailwindCSS

- Header and Logo

- Routing of App

- Login form 

- Sign Up Form 

- Form validation

- useRef Hook

- Firebase Set UP 

- deploying (pending.. )

- Deploy (DONE) [Hoisted URL](https://netflixgpt-41bf1.web.app/login)

- Regestaring a user First Time(auth setting...) 

- Loged in Sussfully

- Creates Redux Store with UserSlice

- add user to the Redux store(after login and register)

- remove user form the redx store (after Logout)

- BUG Fixed : restrict /browse page by checking auth status 
using onAuthStateChange listener

- Good Practice : when the componant unmount we have to remove the event listener so we here we have manage the unsubscribe to onAuthStateChange.

- Good Practice: adding constant file to the project 

- create the account on TMDB 

- get the API KEY and API accessToken

- set the API_OPTIONS and Bearer token (in .env)

- make an API call successfully and get the data

- Adding Movies Data to the store 
      - createSlice =>movieSlice 
      - add to the store => movie:movieSlice
      - dispatch an action and store movie data in to the redux store 

- cleanup the Browse.jsx componant 
      - remove the fetch logic from here and just keep for rendring purpose 
      - create a custome hook and jsut call inside the Browse component and get the movies list 

- custom Hook =>useGetNowPlayingMovies()
       - contract as follows
           - API CALL 
           - GET THE DATA
           - STORE TO THE REDUX STORE

- Starting building browse page
   - mainVideoContainer
        - Background Vido
        - VideoTitle
        - description
        - play Button
        - More Info Button
    
    - secondaryContainer
      - Movies *N
      - row * N

      

   


      
 


# Features
- Login/Sign Up 
    - Sign In/ Sign Up Form 
    - redirect to Browse Page

- Browse page (loged user )
   - Header
   - Main move 
     - Trailer in Background 
     - Title, description Play Button
    - Move Suggestion 
    - Movilist *N

- NextFlixGpt Page
   - Search Bar
   - Move sugg(using OPAN AI API)
    


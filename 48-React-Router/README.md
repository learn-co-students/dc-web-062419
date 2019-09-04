## Review on Routes: Back end vs Front end

### Goal: Let's look at our starter code
- create three different 'views' that correspond to three different URLs
    - /
    - /paintings
    - /paintings/:id
- create links/buttons to organically navigate the web app

### Set Up
- `npm install react-router-dom`

### [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

### BrowserRouter
- Will use 1 place in our application (and one place only) at the very top level
- Sometimes aliased

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- What if we leave out the path prop?
   - component prop takes in a component variable
   - render prop takes in a function, that function must return some JSX

### Nested Routes `/:id`

### Link
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Route components will re-render and show components based on new url
- works with the browser's native back and forward controls

### Switch
- Pick one of the following routes (the first that matches) and load that component
- Doesn't look at the others (like an if/ else if/ else if)
- Takes in no props

#### Project Week Announcements
- Full week, woo!!!

- Skateboard should have three-ish models
   - CRUD is nice, not needed
- Should use React Router
- Auth not part of skateboard (will learn later)
   - Fake auth for now (form for username and password, make a find_by request on your back end)

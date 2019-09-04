# Lab Review: Sushi Saga

Welcome to Sushi Saga, where your journey to sushi is only just beginning!

We've had a bit of trouble with our patented Sushi Saga conveyor belt system, so before you can eat, you're going to have to help us get it working.

**Here's what it should look like:**

![Sushi Saga](https://raw.githubusercontent.com/learn-co-curriculum/React-Practice-Code-Challenge/master/sushi-saga-demo.gif)

## Server

To get you going, we've got a backend just chock full of sushi just waiting to be eaten! To get get these guys, you're going to have to do the follow:

1. Navigate to `sushi-saga-client` and run `json-server --watch db.json`
2. Navigate to `http://localhost:3000/sushis` to confirm delivery of sushi!

## Client

The component hierarchy should be as follows:

- `App` is parent to both `SushiContainer` and `Table`
- `SushiContainer` is parent to both `Sushi` and `MoreButton`

Don't forget to draw out the wireframe!

## GOALS

1. Leverage lifecycle methods to manipulate state
2. Understand where to put state and when to pass props
3. Be comfortable adding event listeners to JSX
4. Determine the shape of initial state
5. Pass props from parent to child
6. Pass information back up the component tree from child to parent

## Deliverables

1. Sushi list is properly received from the server
2. Render sushi to the correct component. Statically.
    - Note: only 4 sushi are rendered at a time
3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list.
    - Note: Dynamically render the 4 sushi
4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate.
5. An empty plate will appear on the table for each eaten sushi.
6. Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten.
7. Customers cannot eat any sushi that exceeds the amount of money remaining in their balance.

### Bonus

1. SushiWallet! Add a form for customers to add more money to their balance
2. Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!
3. Anything else!

## Build It Out

1. Sushi list is properly received from the server
    - Things to think about:
      - When should this information be fecthed from the server?
        - We'll do this in componentDidMount
      - What do we want to do with that information when we receive it?
        -Put it in state

    - Make a fetch
    - Decide what to do with the response

2. Only 4 sushi are rendered at a time / Render Sushi to the correct component
    - Hardcode 4 sushi to send to the SushiContainer component (We can worry about making it dynamic later)
    - Render 4 Sushi components
    - For the time being, change the conditional in the Sushi component for the sushi show up initially.

    - Render all relevant Sushi details.

3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list.
    - Things to think about:
      - Decide where the callback function should go
        -Should go in App since we are changing state in App
      - Decide where the event listener should go
        - On the MoreButton because we are looking for a click on the MoreButton
        - Does anything need to be passed into the callback?
      - Decide what we want the callback to do. How do we want to update state?
        - What does this mean for the Sushi we are sending to the SushiContainer for rendering?

    - Create the callback function.
    - Double check that our state is updating correctly (Hint: use the React Dev Tools)
    - Leverage state to dynamically send Sushi to the SushiContainer

4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate.
    - Things to think about:
      - What event is occurring on the DOM here?
        - onClick of a sushi
      - How is it going to manipulate state?
        - What (if anything) needs to be passed to the callback function?
          - A sushi object or id
        - Who’s job is it to keep track of which Sushi has been eaten?
          - App will keep track of this state
        - How do we want to keep track of which Sushi has been eaten?
            - Make an eatenSushi array in state
      - Which component needs to know whether or not a Sushi has been eaten?

    - Create an event listener
        - That event listener is going to manipulate state somehow
    - Depending on the answers from the navigators, conditionally render the empty Sushi plate in the SushiContainer

5. An empty plate should appear on the table for each eaten sushi
    - Things to think about:
      - Which component is responsible for rendering the empty plates?
        -Table component will render the empty plates
      - How do they get rendered?

    - Render the empty plates for the eaten sushi!

6. We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten.
    - Things we want to think about:
      - What are we keeping track of in this deliverable?
        - Budget needs to be set in state
        - Decide on a starting balance for the customer and where it makes sense for it to live. What factors into calculating this balance?
      - What event is occurring for this to happen? Do we already have an event listener for this?
        -Our eatSushi callback should subtract the cost of the sushi from our overall budget

    - Setup the initial balance
    - Decrement the amount of ths sushi from the balance
    - Render the correct balance to the correct component

7. No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance
    - Things to think about:
      - What piece of state does this involve and how do we need to manage it?
        - Bugdet. It cannot go below zero.
      - If the balance is 0… what do we want to do?
        - We can put an alert here. We do NOT want to setStae for the new budget or add the sushi object to the eatenSushi array
      - When should we be checking for this?
        - onClick of the sushi image!

    - Determine what piece of state to update
    - Determine when it makes sense to update that state
    - Render it to which component?

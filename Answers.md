1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map()
filter()
reduce()
Any method that doesn't alter the original array/method. We use the spread operator {...state} to spread in state to a new object, rather than mutating the original object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The Store is where state is housed. Actions are built with a type and payload, which are sent to reducers to _do something_ to either alter the app's state, fetch data, etc.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is the top level, components branch out from there. Component state is stored locally, in that component. App state is the state of the app, i.e. the store.

1.  What is middleware?

Middleware allows developers to stop an action from firing until _somethine_ happens.. i.e. wating until an api call is successful or not to then fire an action to a reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a 3rd party middleware library that allows you to do async actions, such as api calls and authentication, in redux. This changes the action creators by allowing you to alter the dispatch based on what comes back from the api call.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect()()

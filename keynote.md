# Notes

* **React is library not a framework**  

* **Difference between npm and npx**  
npm is node package manager while npx is node package runner. Using npx you can directly run a node package without installing on your local.

* **Name export and default export**  
In default export variable can be asigned to any named variable while in name export assigned variable name should be same as the export variable.  
DEFAULT EXPORT  
const function = () => 'Exporting using default keyword'  
export default  function  
import any_name from <file_path>  
NAME EXPORT  
export const function = () => 'Name Export'  
import { function } from <file_path> // import variable name should be same as export variable name.  

* **JSX**  
JSX is javascript + XML, it allows you HTML code into javacript code. When you use JSX, the compiler transforms it into React function calls that the browser can understand, which is done using a babel plugin called @babel/plugin-transform-react-jsx. **We can use JSX without React.**.

* **We import React library in JSX, because JSX translates into React.createElement by using *babel-standalone***

* **Props**  
Props aka Properties is the optional input that your component can except it also allows props to be dynamic. Props are immutable.

* **We can return only HTML element from functions**  

* **Props vs State**  

  | Props | State |  
  | --- | --- |  
  | Props get Passed to the component | State is managed within the component |  
  | Function Parameters | Variables declared with in the function body |
  | Props are immutable parent own the props and cannot be change by the children | State are mantained in the component and hence component has full control to change the state |

* **State**  
A state is nothing but a object privatly maintained inside a component. A state can influence what is render in the browser. State can change within the component.

* **setState**  
We update state value using setState because it re renders the component. setState function is Asynchronus.  
Always make use of setState and never modify the state directly.  
Code has to be executed after the state has been updated ? Place that code in the call back function which is the second argument to the setState method.  
When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.  

* **Adding Event Handler in Class Components using Four Ways**  
1st method: use bind()  
2nd method: use the arrow function  
3rd method (official and mostly used): binding from constructor (best Approach)  
4th method: define the trigged function as an arrow function (best Approach)  

* **IF ELSE cannot be written inside the JSX**

* **Four ways for conditional rendoring**  
IF/ELSE  
Element Variables  
Ternary Conditional Operator  
Short Circuit Operator **(Only applicable when you want to render something or nothing)**  

* **KEYS PROP**  
Keys help react identify which items in a list have changed or added or removed and plays a crucial role in handling UI updates efficiently. Keys cannot be accessed in a component. [Why we need keys?](https://www.youtube.com/watch?v=0sasRxl35_8&t=235s) || [Index as Key Anti Pattern V.V.V.IMP](https://www.youtube.com/watch?v=xlPxnc5uUPQ&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=19)

* **4 Ways to style react components**  
1 CSS Style sheets (applies to child component as well)  
2 Inline Styling  
3 CSS Modules (Only applies to current component)  
4 CSS in JS libaries  

* **Controlled components in React are those in which form data is handled by the component's state**

* **Component Life Cycle Methods**  
1 Mounting (When a component is created and inserted into DOM)  
2 Updating (When a component is being re-rendered due to change in prop or stats)  
3 Unmounting (When a component is removed from DOM)  
4 Error handling (When there is an error during rendering, in a lifecycle method, or in the constructor of any child component)  

* **Mounting a Components (Methods are in occuring order)**  
1 **constructor()** called whenever a constructor is called, used to initialize state and binding the event handlers  
2 **static getDerivedStateFromProps**  called when state of component deponds on changes in props overtime  
3 **render()**  Read props & state and return JSX, avoid changing state and DOM manipulation in this method  
4 **componentDidMount()** Invokes immediately after a component  and its children components has been rendered to the DOM  **perfect place for DOM manupilation and ajax request**

* **Updating a Components (Methods are in occuring order)**  
1 **static getDerivedStateFromProps**  called when state of component deponds on changes in props overtime, allways called when component is re-rendered  
2 **shouldComponentUpdate** dictates if the component should re-render or not by comparing next props and state with their current values and used for performance optimization  
3 **render()**  Read props & state and return JSX, avoid changing state and DOM manipulation in this method  
4 **getSnapshotBeforeUpdate**  called right before the changes from the virtual DOM are to be reflected in the DOM  
5 **componentDidUpdate(prevProps, prevState, snapshot)** called after the render is finished in re-render cycle  

* **Unmounting a Components (Methods are in occuring order)**  
1 **componentWillUnmount()** Method is invoked immediately before a component is unmount or destroyed

* **Error Handling Phase in a Component's Life Cycle (Methods are in occuring order)**  
1 **static getDerivedStateFromError**  
2 **componentDidCatch**

* **Fragments**  
Allows you to return multiple element without enclosing every element into a parent element. React.Fragment takes only one attribute that is 'key'. Shortform for React.Fragment is "<> </>" but you cannot pass key element with that.  

* If you return false from shouldComponentUpdate() component will not re-render

* **Pure Component**  
**Only Available in class component**  
A regular component doesn't implement the shouldComponentUpdate() method. It always return true by default. A Pure component on  the other hand implements shouldComponentUpdate() with a shallow props and state comparison. Pure component does shallow comparison of prevState with currentState and prevProps with currentProps

* **Shallow Prop and State Comparison**

  | Primitive Types | Complex Types |  
  | --- | --- |  
  | a Shallow Comparision b returns true if a and b have same value and are of the same type |  a Shallow Comparision b returns true if a and b reference the same object |  

  Example of shallow comparison on complex data type

  var a = [1, 2, 3]
  var b = [1, 2, 3]
  var c = a
  (a === b ) returns false
  (a === c) returns true because a and c refer to same object

* **MEMO**  
**What pure component is to class component, memo is to function component**  
Using memo will cause React to skip rendering a component if its props have not changed.

* **Refs**
Refs provide a way to access DOM nodes or React elements created in the render method.  
Three Way to implement Refs  

  1) React.createRef()
  2) Using Callback Ref (Older Approach)
  3) Using Refs on component

* **Ref Forwarding**  
It is a technique for automatically passing a ref through a component to one of its childern.  
We know that every functional components recieves props as its parameter, but when the component is passed as parameter
to the create Ref Method it recieves ref attribute as its second parameter.

* **React Portal**  
React portals provides a way to render children into a DOM node that exists outside the DOM heirarchy of the parent component.

* **Why do we need React Portal?**  
When we have to deal with parent component CSS when that child componet is a modal, pop-up or toolkit [Demo](https://codesandbox.io/s/00254q4n6p)  
**Event Bubbling in Portal** even though a portal can be anywhere in the DOM tree it behaves like a normal react child in every other way this includes event bubbling, so an event fired from inside a portal will propogate to ancestors in the containing react tree even though those elements are not ancestors in the DOM tree. [Demo](https://codesandbox.io/s/00254q4n6p)

* **Error Boundary**  
A class component that implements either one or both of the life cycle methods **getDerivedStateFromError** or **componentDidCatch** becomes an error boundary.  
Error boundaries are react component that catch javascript error in their child conponent tree, logs those error, and display a fallback UI.  
Error boundaries catch errors during rendering in lifecycle methods and constructor of the whole tree below them however they don't catch errors inside event handlers, if you have and onclick handler and want to catch an error you just need to use regular try catch statements and not error boundaries.

  1) static method **getDerivedStateFromError** method is used to render a fallback UI after an error is thrown.
  2) method **componentDidCatch** method is used to log the error information.

* **Higher Order Components**
A pattern where a function takes a compoenent as an argument and returns a new component. A HOC adds new functionality or data to the original Component.

  1) **Passing prop in HOC** When you the prop to component they are passed to HOC and not to component. To fix this issue you to pass the props from HOC to component using spread operator.  
  2) **Pasing parameters to HOC**

* **Render Props**
Another way of sharing React components  
In react it is possible to use a prop whose value is a function to control what is actually rendered by a component.  
Render props refer to a technique for **sharing code** between React Component using a **prop whose value is a function**  

* **Anything within the component open and closing tag will be passed as a children prop** (this.prop.children)  

* **React Context**  
Why we need React Context? [Need of React Context](https://www.youtube.com/watch?v=j3j8St50fNY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=38)  
Context provides a way to pass data through the component tree without having to pass props down manually at every level  
Steps to use context

  1) Create the context (src/components/Day3/userContext.js)
  2) Provide a context value (src/Day3.js:25)
  3) Consume the context value (src/components/Day3/ComponentC.js)  
  [KEYPOINT](https://www.youtube.com/watch?v=A9WlkhdLnn0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=42)

* **React HTTP GET/POST**  
React itself doesn't have a particular way to fetch or send data to the server.  
React component simply reads props and stats and render the components therefore to use some data from server
you have to get the data into your components props or state.  
**AXIOS** is a http library to get or send data to the server.

* **React Hooks**
Hooks allows use to use React features without using a class.  
**Why React Hooks?**

  1) Class component use this keyword which works different in javascript as compare to other langugae.
  2) Remember to bind event handlers in class componenets.
  3) Classes don't minify very well and make hot reloading very unreliable.
  4) There is no particular way to reuse stateful component logic. HOC and render props patterns do address this problem, but it makes the code harder to follow.
  5) Create component for complex scenarios such as data fetching and subscribing to events. Related code is not organized in one place.  
  Ex :- Data Fetching - In componentDidMount and componentDidUpdate  
  Ex :- Event Listeners - In componentDidMount and componentWillUmount  
  6) Because of stateful logic - Cannot break components into smaller ones.  

* **useState**
  useState() function take one argument which is the initial value of state and return two variables. First the state variable and second is the function to update the state.  
**Difference between class component's setState and hook's use state is that useState doesn't automatically merge and update the object and setState does**

* **useEffect**  
The effect hook let you perform side effects in functional components.  
It is a close replacement for componentDidMount, componenetDidUpdate and componentWillUnmount.  
useEffect is a function which takes a function as a argument with executed after every render of the component.  
**Conditional Use Effect**: you just have to pass a state a props in an array with useEffect function, in that array we need to pass prop or state which we need to watch if those props or state were to change the effect will be executed. That array is known as **Dependency Array**.  
**Run Use Effect only Once**(Mimic componentDidMount): just pass empty array with useEffect.  
**Run Use Effect after unmount**(Mimic componentWillUnMount): just return another function from the function which was passed in useEffect. Returned function will run before compoenent is removed.  

  **If you think dependency array is a way to specify when you want to return the effect, you are going to run into problems. Instead, dependency array should be thought of as a way to let react know about everything that the effect must watch for changes.** [Illustration](https://www.youtube.com/watch?v=SP-NrbQHFww&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=54)

  **You Can Also Use Multiple Use Effect**

* **useContext**  
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

* **useReducer**
useReducer is hook that is used for state managemenet.
It is an alternative to useState, useState is built using useReducer.  
**reduce vs useReducer**
  | reduce in Javascript | useReducer in React |  
  | --- | --- |  
  | array.reduce(<reducer_function>, initialValue) | useReducer(<reducer_function>, initialState) |
  | singleValue = reducer_function(accumulator, itemValue) | newState = reducer_function(currentState, action) |
  | reduce returns a single value | useReducer returns a pair of values [newState, dispatch] |

* **use Reducer with use Context**

* **Fetching data with use Reducer**

* **useReducer vs useState**

  | Scenario | useState | useReducer |
  | ------ | ------ | ------ |
  | Type of State | Number, string or boolean (primitive) | Object or Array (non-primitive)
  | Number of State Transactions | One or Two | Too Many |
  | Related State Transaction? | No | Yes |
  | Bussiness Logic | No bussiness Logic | Complex Bisiness Logic |
  | Local Global | Local | Global (prefered due to dispatch method) |

* **useCallback Hook**  
**WHAT?** useCallback is hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.  
**WHY?** It is useful when passing callbacks to optimized child components that rely on reference equality(checks whether functions are equal or not) to prevent unnecessary renders.

* **useMemo Hook**  
React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. The useMemo Hook only runs when one of its dependencies update.

* **useMemo vs useCallback**  
useCallback caches the the function itself, while the useMemo invoke the function and caches its return value.  

* **useRef Hook**  
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.  
*It can be used to create a generic container which can hold a mutable value simillar to instance properties on class components. This generic container doesn't cause re-renders when the data it stores changes and at the same it also remembers the stored data even after other state variable cause the re-render of the component*

* **custom Hooks**  
A custom hook is basically a Javascript function whose name starts with 'use'.  
A custom hook can also call other Hooks if required.  
**Why to use custom hook?** Share logic -- Alternative to HOC or render props

* **How Render works in reacts?**  
When we run react application, the code return in our component get translated into element that get mounted into the DOM. React split this process into two phase.
  1) Render Phase  
  During this phase react will start at the root of the component tree and goes downwards to the leaf components, *while traversing for each of the components react invokes the create element methods and converts the compoenents JSX into react elements and stores that render output.* **React elements are basically javascript objects that describe the structure of your UI**.  
  2) Commit Phase  
  Once the JSX to react element conversion is done for the entire component tree all the react elements are handed over to the commit phase. In the commit phase the react elements are applied to the dom using the react-dom package.  
**Render phase during re-rendering**  
During re-rendering phase react will start at the root of the component tree and goes downwards to the leaf components finding all components that have been flagged as needing updates(A component can flag itself by calling useState setter function or calling the useReducer dispatch function).  
For each flagged component, react converts JSX to React element and store the result.  
Perform reconciliation - Diff old and new tree of React elements (a.k.a Virtual DOM)  
Hands over the change to commit phase.

* **[Strict Mode](https://reactjs.org/docs/strict-mode.html)**
It intentionaly double invoke the function component body only in development mode.

* **useState Rendering**  
Special case with useState and re-rendering is that if you update a state hook to the same value as the current state react may render that component one more time and then bail out from subsequent renders.  
But after the intial render if you call a setter function but set the state to the same value the component will not re-render.  
**React uses [object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) method to compare the states**

* **useReducer Rendering**  
The dispatch function from a useReducer hook will cause the component to re-render.  
Else everything will be same as useState.

* **State Immutablity**
Don't directly mutate the object and expect the component to re-render.(same with array)  
Mutating an object or an array as state will not cause a re-render when used with useState or useReducer Hook.  
To re-render, make a copy of existing state, modify as neccessery and then pass the newState.  

* **Rendering with Parent and Child**  [Link](https://www.youtube.com/watch?v=b_DtnmQkhWM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=82&t=420s)  
When parent component renders react will recursivily render its child component.  
First Case: When new State is different from Old State.  
Second Case: When new State is same as Old State.  
    a) Right after the initial render.  
      It will not re-render (as usual)  
    b) After re-renders.  
      Only Parent component will re-render one more time and then ball out from re-rendering, but child component will not render.

* **Same element re-rendering** [Link](https://www.youtube.com/watch?v=K19dWjcI1Jk&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=84&t=88s)  
In React, when a parent component renders, React will recursively render all of its child components.  
"Unneccessary renders" where the child components goes through the rendere phase but not the commit phase.  
You can extract the expensive child component and instead pass it down as props to the parent component.  
Whenever there is a re-render caused by a change in the state of the parent component, React will optimize the re-render for you by knowing that the props has to be referncing the same element before and after the render.  
But the when you update the prop of the parent component the children component(which passed as prop) will also again go through the render phase.  

* **React Memo**  
To let the react know that it should re-render the child component only if its props change. React.memo is a Higher Order component which we can use to wrap componnet if they render the same result given the same props. It memoize the render output, so if your component props don't change between the renders react will skip rendering the component and reuse the last rendered result.  
**When to use**  
In React, when a parent component renders, a child component might un-necessarily render.  
To optimize this behaviour, you can use React.memo and pass in the child Component.  
React.memo will perform a shallow comparison of the previous and new props and re-render the child component only if the props have changed.

* **Incorrect Memo with the Children [VVIP]**  
In react props.children is always a new reference which will cause the child component to always render. So there is no need to wrap your child component with React.memo, if the child component itself has children elements as a props.

* **What is Redux?**  
'Redux is a predictable state container for javascript apps'  
  1) Redux is for javascript apps.  
  **Redux is not tied to React** it can be used with any UI library and framework like React, Angular, Vue or even Vanilla JS. Redux is a library for Javascript applications.  

  2) Redux is a state container.  
  Redux stores the state of your application. State of an application is the state shared by all the individual components of that app. Redux will basically store and manage the application state.  

  3) Redux is predictable.
  In Redux, a pattern is enforced to ensure all the state transactions are explicit and can be tracked. The changes to your application's state became predicatable.  

* **Why to use Redux?**  
If you want to manage the global state of your application in a predicable way, redux can help you.  
The pattern and tools provided by Redux make it easier to understand when, where, why and how the state in your application is being updated, and how your application logic will behave when those changes occur.  
Redux guides you towards writing code that is predicatable and testable, which helps give you confidence that your application will work as expected.  

* **What is Redux Toolkit?**  
Redux toolkit is a library for efficient redux development and it is the offical, opinionated, batteries-included toolset for efficient Redux development.  
It is also intended to be the standard way to write  Redux logic in your application.  

* **Why Redux Toolkit?**  
Redux is great, but it does have a few shortcommings  
  * Configuring redux in an app seems complicated.  
  * In addition to redux, a lot of other packages have to be installed to get redux to do something useful.
  * Redux requires too much boilerplate code.  

  Redux toolkit serves as an abstraction over redux. It hides the difficult parts ensuring you have a good developer experience.  

* **React-Redux is the official Redux UI binding library for React**  

* **Three core concepts of redux**  

1) A **store** that holds the state of your application.
2) A **action** that describes what happened in the application.
3) A **reducer** which handles the action and decides how to update the state.

* **Three principles of Redux pattern**  

1) *The global state of your application is stored as a object inside a single store.*
2) *The only way to change the state is to dispatch an action, an object that describes what happened.*
To update the state of your app, you need to let Redux know about that with an action. Not allowed to directly update the state object. (State is read-only and only way to update the state is to emmit an action)
3) *To specify how the state tree is updated based on actions. you write pure reducers*

* **Actions**

1) The only way your application can interact with the store.
2) Carry some information from your app to the redux store.
3) They are plain javascript objects.
4) Must Have a 'type' property that describes somethings that happend in your application.
5) The 'type' property must be a string constant.

* **Reducers**

1) It specify how the application state changes in response to actions sent to the store.
2) It is a function that accepts state and action as arguments, and returns the next state of the application.

* **Store**  
One store for entire Application.  
Responsibilities  

  1) Hold application state.
  2) Allow access to stage via getState()
  3) Allow state to be updated via dispatch(action)
  4) Register listeners via subscribe(listener)
  5) Handles unregistering of listeners via the function returned by subscribe(listener)

* **BindActionCreators**  
bindActionCreator turns an object whose values are action creators into an object with the same keys but every action creator wrapped into a dispatch call so they may be invoked directly.

* **Multiple Reducers(combineReducers)**  
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.  
**When we dispatch an action both the reducers recieve that action, the difference is that one of them acts on that action whereas the others ignores it**  

* **Immer**
[Link](https://www.youtube.com/watch?v=kgCjXjJkZ-Y&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&index=13)

* **Middleware**  
It is the suggested way to extend Redux with custom functionality.  
Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.  
You can use middleware for logging, crash reporting, perform async tasks etc.

* **Async Actions**  
Redux thunk (define async action creators)  
thunkmiddleware adds an abilty to an action creator to return a function instead of an action object.

* **Redux Concerns**  
Redux requires too much boilerplate code
  * Action
  * Action Object
  * Action Creator
  * Switch Statement in reducer  

  A lot of package has to be installed to work with redux
  * Redux Thunk
  * Immer
  * Redux-dev tools

* **Redux toolkit**  
Redux toolkit is the offical, opinionated, batteries-included toolset for efficient Redux development  
  * Abstract over the setup process
  * Handle the most common use cases
  * Include some useful utilities

* **createSlice uses the immer library under the hood**.  
Redux toolkit handles the state updation on your behalf.  
createSlice will automatically generate action creators with the same names as the reducer functions we have written.  
createSlice also returns the main reducer function, which we can provide to our redux store.

* **Extra Reducers**  
In redux toolkit by default reducers from one createSlice will only respond to the action types generated by the same slice, if you want a slice to respond to other action types besides the types it has generated you'll need to make use of extraReducers.  

* **React Redux Provider**  
The provider component uses react context under the hood and will provide the store to every component in your application.  

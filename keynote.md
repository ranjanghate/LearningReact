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

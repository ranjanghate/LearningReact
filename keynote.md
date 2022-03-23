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

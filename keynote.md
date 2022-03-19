# Notes

## Day1

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

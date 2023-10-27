# React interview prepration session - EA25
## Day - 1 
### Q1. What is SPA ( Single Page Application) 
- SPA stands for Single Page Application, and it's a web application or website that interacts with the user by dynamically rewriting the current web page rather than loading entire new pages from the server. React is a popular JavaScript library for building SPAs.
- A Single Page Application (SPA) is a web application that loads all of its content on a single HTML page. This is in contrast to traditional web applications, which load a new HTML page for each new view. SPAs are more responsive and user-friendly, as users do not have to wait for new pages to load every time they interact with the application.
- In a React SPA, the initial HTML page typically only contains a single "div" element, which serves as the entry point for the React application. When the page loads, React renders the initial UI based on the state of the application. As the user interacts with the application, React updates the UI in response to events such as button clicks or form submissions.

###### One advantage of using a React SPA is that it can provide a smoother and more responsive user experience compared to traditional web applications, since the page does not need to reload every time the user interacts with it. However, SPAs can be more complex to build and maintain, since they require more client-side code and may require additional server-side infrastructure to support the API.

### Q2. What is Virtual DOM?

- **DOM** : DOM stands for Document Object Model. Normally, whenever a user requests a webpage, the browser receives an HTML document for that page from the server. The browser then constructs a logical, tree-like structure from the HTML to show the user the requested page in the client.

##### The problem with DOM
DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations. This slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.

### Virtual DOM - 
-   React contains a lightweight representation of real DOM in the memory called Virtual DOM.
-   DOM gets created whenever any React application gets loaded on the screen for the first time, Whenever React components gets mounted on the screen for the first time.
-   Now when any user makes any changes on the screen like button click, then the changes will not directly go to Real Dom.
-   So, we are having two virtual doms, one VDOM gets created at the time of mounting of react component so it is a copy of your real DOM.
-   Another VDOM is the dom which contains the new changes, updated state variables values.
-   Now these two virtual DOMs will get compared with each other and will check for the new changes this complete procedure is known as **diffing algorithm.**
-   Now the new changes will be updated in your Real DOM, this procedure is known as **Recoinciliation** This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.

### Q3. What is difference between class and functional component?

|Function-Based Components | Class-Based Components|
|------|------|
|Functional components is a plain JavaScript, you do not have a choice to set the state in functional component.| Class components we have a feature to set the set state in component|
|There is no render function we are using in functional components.| In class components, we have a render function which is use to return the react elements.|
|Function components only accept the props as an arguments.| In class componsnts, we have a render function which is use to return the react elements.|
|Functional components are somethimes called stateless components.| Class components are sometimes called stateful components.|


### H/W - Difference between Props and State?
|Props (Properties) | State | 
|---- | ----- |
|Props is used to send data from one compo to another (Parent to Child) | State is a obj. that represent the internal variable of a component. |
|Props can't be modified | We can modified state using setState function | 
|Props can be used in class and function based components | State can be used only in class based components|
|Props are read-only | State changes can be changed|
|Props are passed outside a componsnts | States are passed inside a components|

### Q4. What is package.json?
1. The package.json file is a crucial part of any Node.js project, including React applications. It's a JSON (JavaScript Object Notation) file that serves as a manifest for your project. In the context of React, it specifies the project's metadata and its dependencies.
   1. Name and Version:
   2. Dependencies:
   3. Scripts:
   4. DevDependencies:

### Q5. What is JSX and why do we use it instead of js?
- JSX, which stands for JavaScript XML, is a syntax extension for JavaScript that is commonly used in React applications. It allows you to write HTML-like code within your JavaScript code. JSX provides several benefits for building user interfaces, and here's why we use it instead of plain JavaScript:
    1. Declarative Syntax
    2. Readability
    3. Component Composition
    4. Performance Optimization
    5. Ecosystem Support

### Q. 6 What is the Difference between react and react native? Which one is library or framework?

|React JS | React-Native|
|---- | ----|
|JS Library | Mobile Framework|
|Use to build web application | use to build cross-plateform mobile application.|
|V-DOM render data on browser | Native API for mobile components rendering|
|create robust animation using CSS | Need to use API for create animation |

### H/W Q7. Difference b/w Stateful and stateless Component?

| Statfull| Stateless |
|----| ----- |

### Q8. What do you know about NPM?
- NPM (Node Package Manager) is the default package manager for Node.js, a popular runtime environment for executing JavaScript code outside of web browsers. It is a fundamental tool in the JavaScript ecosystem and plays a crucial role in managing packages and dependencies for Node.js applications. Here is an overview of what NPM is and what it's used for:
  1. Package Management
  2. Dependency Management
  3. Command-Line Interface (CLI)
  4. Scripts
  5. Security
  6. Open Source and Community

## Day - 2


### Q1. What is an event in react?
- An event in React is an action that is triggered by the user or the system. For example, a mouse click, keyboard press, or window resize are all events. React has its own event handling system, which is known as **Synthetic Events**. Synthetic Events are cross-browser wrappers of the browser's native events, which means that they have the same interface and behavior across all browsers.
- To handle events in React, you use event handlers. Event handlers are functions that are passed to React elements as props. When the event is triggered, the function is called with an event object as the argument. The event object contains information about the event, such as the type of event, the target element, and any additional data.
  
- Here are some examples of common events in React:
  - onClick: Fired when the user clicks an element.
  - onChange: Fired when the user changes the value of an input element.
  - onSubmit: Fired when the user submits a form.
  - onKeyPress: Fired when the user presses a key on the keyboard.
  - onMouseOver: Fired when the user moves the mouse cursor over an element.
  - onMouseOut: Fired when the user moves the mouse cursor away from an element.

### Q2. What is the package name you are using for routing?
- Name of the packege is React Router DOM.
- install => npm install / i react-router-dom

### Q3. Implement Routes with Components name ?
- Home
- Student
  - implement dynamic route in student
- Contact
- About

### Q6. What is lazy loading in react ?
- Lazy loading is a technique in web development that involves loading specific parts of a web application only when they are needed. In the context of React.js, it allows you to load components, modules, or assets asynchronously and on-demand, improving the initial load time and overall performance of your application.
- Why Use Lazy Loading in React?
  - Improves initial page load time.
  - Reduces the size of the initial bundle.
  - Enhances user experience by loading resources on-demand.
  - Optimizes performance for large applications.

- Component used in lazyloading
  - Suspense - 
  - Lazy - import from 'react'

### Q7. H/W Difference between Axios and fetch?
|Axios | Fetch | 
|----- | ------- | 
|3rd Prty Library | JavaScript Method | 
|Automatically transform Data | Have to manually transform data | 
|Has to be compiled | can be read directly by browsers | 
|Need to install externally | No need to install |

# Day - 3

### Q1. What is Props Drilling Concept ?What is State Uplifting?
- **Prop Drilling**: Prop drilling, also known as "prop passing," is a common issue in React applications. It occurs when you need to pass data through multiple levels of nested components, even if some of the intermediary components don't use that data. It can make your code less maintainable and harder to understand.
- **State Lifting**: State lifting is the process of moving state up the component hierarchy to a common ancestor or a higher-level component where it can be shared by multiple child components that need access to the same data. This makes it easier to manage and update the shared state.
- Benefits of State Lifting:
  - Simplified Code: State lifting reduces redundancy in your code and makes it easier to manage, as you don't have to pass props through many levels of components.
  - Improved Performance: Avoiding prop drilling can improve the performance of your application, as React doesn't need to re-render components unnecessarily.
  - Easier Maintenance: When you need to modify the state or data, you only need to do it in one place (the common ancestor) rather than making changes in multiple child components.

### Q2. Fetch API data using Axios?

### Q3. Context API?
- The Context API is a powerful feature in React that allows you to manage and share state data between components without having to pass props down through every level of your component tree. It's especially useful for scenarios where multiple components need access to the same data.
- Context API is a built-in feature in React that provides a way to pass data through the component tree without having to pass props manually at every level. It allows you to share data between components, such as theme information, user authentication, or any other global data.
- **When to Use Context API?**
  - You should consider using the Context API when you have data that needs to be accessed by multiple components at different levels of the component tree. It simplifies data sharing and avoids "prop drilling."
    - A Provider component is used to wrap the part of your component tree where you want to share data. It accepts a value prop, which will provide the shared data to its child components.
    -  you can use the useContext hook to access the context data more conveniently.
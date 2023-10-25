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
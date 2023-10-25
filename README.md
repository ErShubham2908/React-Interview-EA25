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

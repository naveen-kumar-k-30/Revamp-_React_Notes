# Theory

## 1. What is Emmet?
Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow. It allows developers to write short code abbreviations and then expand them into full-fledged HTML code. For example, typing `div.container>ul>li*5` and pressing the Emmet expand key (usually Tab or Enter) will expand into:

```html
<div class="container">
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```

## 2. Difference between a Library and Framework?
- **Library**: A library is a collection of pre-written code that developers can use to optimize tasks. Libraries focus on a specific functionality. You call the library’s functions as needed, allowing you to remain in control of the flow of the application. Example: jQuery, React.
- **Framework**: A framework is a comprehensive tool that provides a structured and pre-defined way to build applications. Frameworks dictate the architecture of your application and call your code within specific places of the framework. Example: Angular, Django.

## 3. What is CDN? Why do we use it?
- **CDN (Content Delivery Network)**: A CDN is a network of servers located across various geographical locations. It distributes the delivery of content to users based on their location, improving load times and reducing latency.
- **Why use CDN?**: 
  - Faster load times for users by serving content from the nearest server.
  - Reduced bandwidth costs.
  - Increased content availability and redundancy.
  - Improved security through DDoS protection and other measures.

## 4. Why is React known as React?
React is known as React because it is designed to be responsive and reactive to changes in data. The idea is to create UI components that automatically update and react to data changes without having to manually manipulate the DOM.

## 5. What is crossorigin in the script tag?
The `crossorigin` attribute in the script tag is used to handle CORS (Cross-Origin Resource Sharing) requests. It specifies how the script should be handled when fetching resources across different origins. It can take the following values:
- `anonymous`: Performs the CORS request without sending credentials (cookies, HTTP authentication, and client-side SSL certificates).
- `use-credentials`: Performs the CORS request with credentials.

## 6. What is the difference between React and ReactDOM?
- **React**: React is a JavaScript library for building user interfaces. It provides the tools necessary for creating components, managing state, and handling lifecycle events.
- **ReactDOM**: ReactDOM is the package that provides DOM-specific methods. It is responsible for rendering React components to the DOM. Essentially, React is for creating and managing components, while ReactDOM is for rendering those components to the web page.

## 7. What is the difference between react.development.js and react.production.js files via CDN?
- **react.development.js**: This is the development version of React, which includes helpful warnings and error messages to aid in debugging. It is larger in size and not optimized for performance.
- **react.production.js**: This is the production version of React, which is optimized for performance and stripped of development-specific warnings and error messages. It is smaller in size and is intended for use in a live, production environment.

## 8. What is async and defer?
- **async**: The `async` attribute is used in the script tag to specify that the script should be executed asynchronously. This means the script is fetched in the background and executed as soon as it is available, without blocking the HTML parsing.
- **defer**: The `defer` attribute is used in the script tag to specify that the script should be executed after the HTML has been parsed. This ensures that the script is executed in the order it appears in the document and only after the entire document is ready.
```

Sekvenssikaavio tilanteesta, jossa käyttäjä menee selaimella osoitteeseen https://studies.cs.helsinki.fi/exampleapp/spa
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET /exampleapp/spa
    activate server
    Note right of server: Server responds with a document similar to the first example
    server->>browser: HTML document
    deactivate server
    browser->>server: /exampleapp/main.css
    activate server
    server->>browser: CSS file
    deactivate server
    Note right of browser: The browser requests the single page app JavaScript
    browser->>server: /exampleapp/spa.js
    activate server
    server->>browser: JavaScript file
    deactivate server
    Note right of browser: The browser starts executing the JavaScript
    browser->>server: GET /exampleapp/data.json
    activate server
    Note right of server: The server formats the data in 'notes' as a JSON object
    server->>browser: Updated JSON object
    deactivate server
    Note right of browser: The browser processes the data from the JSON objects and renders the list as HTML
    Note right of browser: The browser sets up an event listener to handle the form submit with JavaScript instead of the default browser action
```
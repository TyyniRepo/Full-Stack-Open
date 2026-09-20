Sekvenssikaavio tilanteesta, jossa käyttäjä luo uuden muistiinpanon ollessaan sivulla https://studies.cs.helsinki.fi/exampleapp/notes eli kirjoittaa tekstikenttään jotain ja painaa nappia tallenna.
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Browser submits the form data "note=jotain"
    browser->>server: POST /exampleapp/new_note
    activate server
    Note right of server: The server stores the value of 'note' and a time stamp in 'notes'
    server->>browser: Redirect to /exampleapp/notes
    deactivate server
    Note left of browser: The rest of the sequence is the same as the example
    browser->>server: GET /exampleapp/notes
    activate server
    server->>browser: HTML document
    deactivate server
    browser->>server: /exampleapp/main.css
    activate server
    server->>browser: CSS file
    deactivate server
    browser->>server: /exampleapp/main.js
    activate server
    server->>browser: JavaScript file
    deactivate server
    Note right of browser: The browser executes the JavaScript
    browser->>server: GET /exampleapp/data.json
    activate server
    Note right of server: The server formats the data in 'notes' as a JSON object
    server->>browser: Updated JSON object
    deactivate server
    Note right of browser: The browser processes the data from the JSON objects and renders the list as HTML
```
Sekvenssikaavio tilanteesta, jossa käyttäjä luo uuden muistiinpanon single page ‑versiossa.
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The event listener intercepts the form submission
    Note right of browser: The browser appends the new note to the list and updates the HTML
    Note right of browser: The browser makes a POST request with the new note data as a JSON object
    browser->>server: POST /exampleapp/new_note_spa
    activate server
    Note right of server: The server stores the value of 'note' and a time stamp in 'notes'
    server->>browser: Response 201 {message: note created}
    deactivate server
    Note right of browser: The browser shows the successful response in console log
    Note right of browser: The event listener for form submission keeps listening for more events
```
GIVEN a note-taking application

WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
- landing page seems stable, already developed in starter code
- link to notes page seems to be running, needed to adjust href path in the button

WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- notes page may need formatting, only 2 raw input fields, input not responsive
- html seems to have Bootstrap equipped, shouldn't be hard to create a sidebar and main field for notes/input

WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
- all 3 buttons are currently in header, probably need to code so that buttons are "hidden" at different conditions
- While I'm at it, probably code the input fields to be hidden until "new note" button is activated

WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear

WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation

WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

ALSO: looks as if the site should deploy from a localhost address, instead of from a deployment link

from instructions.md: 

    On the back end, the application should include a db.json file that will be used to store and retrieve notes using the fs module.

    The following HTML routes should be created:

    GET /notes should return the notes.html file.

    GET * should return the index.html file.

    The following API routes should be created:

    GET /api/notes should read the db.json file and return all saved notes as JSON.

    POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

BONUS:

    Bonus
    You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

    DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
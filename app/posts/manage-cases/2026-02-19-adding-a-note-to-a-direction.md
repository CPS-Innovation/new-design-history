---
title: Adding a note to a direction
date: 2026-02-19
---

Notes are currently accessed via an icon on the directions list, which opens a modal dialog.

But the modal has several problems:

- it's cramped and requires scrolling because the form is taller than the modal’s container
- it has two toggle switches, "flag as urgent note" and "flag as urgent task" that behave confusingly - for example, selecting both disables "flag as urgent note"
- the previous notes section is blank and takes up a lot of space when there are no notes
- the "Add note" button sticks to the bottom of the modal but sticky buttons have problems

So we redesigned the flow to use dedicated pages instead.

## How it works

Clicking "Add note" on the [direction details page](/manage-cases/viewing-direction-details/) takes the user to a page to enter a note. An inset shows the direction description for context.

![The note page showing "Note" as the heading, an inset showing the direction description, a Note textarea, and a Continue button.](/manage-cases/adding-a-note-to-a-direction/step-1-note.png)

After entering a note, the user is taken to the check answers page:

![The check answers page showing "Check details and add note" as the heading, with direction and note rows, and an "Add note" button.](/manage-cases/adding-a-note-to-a-direction/step-2-check.png)

The note has a change link to go back and change it.

After clicking "Add note", the user is taken back to the direction details page.

A success banner says "Note added" and the new note appears at the top of the notes list.

![The direction details page with a green success banner saying "Note added" and the new note appearing at the top of the notes section.](/manage-cases/adding-a-note-to-a-direction/success.png)

### Activity log

The action is recorded in the activity log as "Direction note added", showing the direction description and the note text.

![The case activity log showing a "Direction note added" entry by Rachael Harvey, with the direction description and note text.](/manage-cases/adding-a-note-to-a-direction/activity-log.png)

## Error messages

### Note

- No note entered: Enter a note
- Note is too long: Note must be 5,000 characters or fewer

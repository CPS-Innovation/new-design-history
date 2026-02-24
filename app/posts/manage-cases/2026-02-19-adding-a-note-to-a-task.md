---
title: Adding a note to a task
date: 2026-02-19
---

Notes are currently accessed via an icon on the task list, which opens a modal dialog.

The modal has [the same problems when adding a note to a direction](/manage-cases/adding-a-note-to-a-direction/).

So we redesigned the flow to use dedicated pages instead.

## How it works

Clicking "Add note" on the [task details page](/manage-cases/viewing-task-details/) takes the user to a page to enter a note. An inset shows the task name so users can confirm they are adding a note to the right task.

![The note page showing "Note" as the heading, an inset showing the task name "Check directions", a Note textarea, and a Continue button.](/manage-cases/adding-a-note-to-a-task/step-1-note.png)

After entering a note, the user is taken to the check answers page:

![The check answers page showing "Check details and add note" as the heading, with task name and note rows, and an "Add note" button.](/manage-cases/adding-a-note-to-a-task/step-2-check.png)

The note has a change link to go back and change it.

After clicking "Add note", the user is taken back to the task details page.

A success banner says "Note added" and the new note appears at the top of the notes list.

![The task details page for "Check directions" with a green success banner saying "Note added" and the new note appearing at the top of the notes section.](/manage-cases/adding-a-note-to-a-task/success.png)

### Activity log

The action is recorded in the activity log as "Task note added", showing the task name and the note text.

![The case activity log showing a "Task note added" entry by Rachael Harvey, with task name "Check directions" and the note text.](/manage-cases/adding-a-note-to-a-task/activity-log.png)

## Error messages

### Note

- No note entered: Enter a note
- Note is too long: Note must be 5,000 characters or fewer

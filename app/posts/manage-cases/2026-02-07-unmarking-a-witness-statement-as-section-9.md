---
title: Unmarking a witness statement as Section 9
date: 2026-02-07
---

We recently added the ability to [mark a witness statement as Section 9](/manage-cases/marking-a-witness-statement-as-section-9/).

Users also need to be able to unmark a statement as Section 9 if circumstances change - for example, if the defence objects to the statement being read and the witness now needs to give oral evidence.

Users find this action on the witness details page, under each statement that has been marked as Section 9.

## How it works

When a statement has been marked as Section 9, it shows an "Unmark as Section 9" link.

![The witness details page for David Roberts showing Statement 1 with a "Section 9" tag and an "Unmark as Section 9" link.](/manage-cases/unmarking-a-witness-statement-as-section-9/entry-page.png)

Clicking the link takes the user to a confirmation page asking them to confirm they want to unmark the statement as Section 9.

The page shows the case reference, witness name and statement number as a caption above the heading, so users can check they are unmarking the right statement.

![The confirmation page with the heading "Confirm that you want to unmark statement as Section 9" and a green button to confirm.](/manage-cases/unmarking-a-witness-statement-as-section-9/step-1-confirmation.png)

Clicking cancel takes the user back to the witness details page.

Clicking "Unmark statement as Section 9" will:

- take the user back to the witness details page
- show a success banner at the top of the page saying "Statement 1 unmarked as Section 9" - it will disappear when navigating away or refreshing the page
- remove the "Section 9" tag from next to the witness name (if no other statements are marked as Section 9)
- remove the "Section 9" tag from next to the statement heading
- change the link from "Unmark as Section 9" to "Mark as Section 9"

![The witness details page showing a green success banner saying "Statement 1 unmarked as Section 9" with the "Section 9" tags removed and the link changed back to "Mark as Section 9".](/manage-cases/unmarking-a-witness-statement-as-section-9/step-2-success.png)

The action is recorded in the activity log, showing the witness name and statement number:

![The case activity log showing an entry for "Witness statement unmarked as Section 9" by Rachael Harvey with the witness name David Roberts and statement number 1.](/manage-cases/unmarking-a-witness-statement-as-section-9/activity-log.png)

## Future considerations

We want to test how users find unmarking multiple witness statements as Section 9. If users regularly need to unmark several statements at once, we will consider adding bulk functionality to reduce the number of steps.

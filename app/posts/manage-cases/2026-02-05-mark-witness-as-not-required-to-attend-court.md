---
title: Mark witness as not required to attend court
date: 2026-02-05
---

We recently added the ability to [mark a witness as required to attend court](/manage-cases/mark-witness-as-required-to-attend-court/)

Users also need to be able to mark a witness as not required to attend court.

Users find this action on the witness details page.

## How it works

The witness details page shows a "Mark as not required to attend court" link at the top. This link is only shown when the witness has been marked as required to attend court.

![The witness details page for David Roberts showing the "Required to attend court" tag and a "Mark as not required to attend court" link.](/manage-cases/mark-witness-as-not-required-to-attend-court/entry-page.png)

Clicking the link takes the user to a page asking for a reason.

The page shows a textarea with the label "Reason for marking the witness as not required to attend court".

The case reference and witness name are shown as a caption above the heading.

![The reason page with a textarea asking for the reason for marking the witness as not required to attend court.](/manage-cases/mark-witness-as-not-required-to-attend-court/step-1-reason.png)

After entering a reason and clicking "Continue", the user sees a check answers page. This shows the reason they entered in a summary list with a change link.

![The check answers page showing the reason in a summary list with a change link and a button to confirm.](/manage-cases/mark-witness-as-not-required-to-attend-court/step-2-check.png)

Clicking "Mark witness as not required to attend court" will:

- take the user back to the witness details page
- show a success banner at the top of the page saying "Witness marked as not required to attend court" - it will be focused and it will disappear when navigating away or refreshing the page
- show the "Not required to attend court" tag next to the witness name
- change the link to "Mark as required to attend court"

![The witness details page showing a green success banner saying "Witness marked as not required to attend court" and the new "Not required to attend court" tag.](/manage-cases/mark-witness-as-not-required-to-attend-court/step-3-success.png)

The action is recorded in the activity log. This will include the reason the user gave:

![The case activity log showing an entry for "Witness marked as not required to attend court" by Rachael Harvey with the witness name and reason.](/manage-cases/mark-witness-as-not-required-to-attend-court/activity-log.png)

## Error messages

### Reason for marking the witness as not required to attend court

- Empty: Enter a reason for marking the witness as not required to attend court
- Too long: Reason for marking the witness as not required to attend court must be 500 characters or less

## Future considerations

This is not a complete journey. Marking a witness as not required to attend court also needs communications to be sent to the witness. That is currently a separate journey that users need to remember to do. We want to explore how to make this connection clearer so that users do not forget to send the communications.

We also want to test how users find marking multiple witnesses as not required to attend court. If users regularly need to mark several witnesses at once, we will consider adding bulk functionality to reduce the number of steps.

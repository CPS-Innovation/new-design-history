---
title: Recording a dispute outcome
date: 2026-02-14
---

After [sharing the DGA assessment spreadsheet with the police unit](/manage-cases/exporting-dga-cases/), legal managers must record the outcome of each failure reason.

This captures whether the police disputed a failure, whether CPS accepted it, the reason for the outcome, and how it was discussed. This helps CPS and police learn from disputes and improve how cases are prepared.

Users find this action on the [case failures page](/manage-cases/allowing-users-to-report-on-cases-that-failed-dga/), where each failure reason has a "Record dispute outcome" button.

## How it works

Clicking "Record dispute outcome" takes the user to a page asking if the police disputed the failure.

The failure reason is shown throughout the flow so users know which failure they're recording an outcome for.

![The first step asking "Did the police dispute this failure?" with Yes and No radio buttons. An inset text panel shows the failure reason "Evidential failure - Medical evidence".](/manage-cases/recording-a-dispute-outcome/disputed-step-1-disputed.png)

### If the police disputed the failure

If the user selects "Yes" to "Did the police dispute the failure?" they're asked three additional questions:

Firstly, they’re asked if the CPS accept the dispute.

![The second step asking "Did CPS accept the dispute?" with Yes and No radio buttons.](/manage-cases/recording-a-dispute-outcome/disputed-step-2-cps-accepted.png)

Then they’re asked for a reason for the outcome, a character count with a 200 character limit.

![The third step asking for a reason for the outcome with a character count textarea.](/manage-cases/recording-a-dispute-outcome/disputed-step-3-reason.png)

Then they’re asked how they discussed the dispute with the police with checkboxes for email, meeting, and phone call.

![The fourth step asking how the dispute was discussed with checkboxes for Email, Meeting, and Phone call.](/manage-cases/recording-a-dispute-outcome/disputed-step-4-method.png)

The user then checks their answers.

![The check answers page showing all four answers in a summary list with Change links, and a "Record dispute outcome" button.](/manage-cases/recording-a-dispute-outcome/disputed-step-5-check.png)

### If the police did not dispute the failure

If the user selects "No" to "Did the police dispute this failure?", they go straight to the check answers page.

If this is the last failure for the case, the page shows what outcome will be recorded in CMS.

![The check answers page for a not-disputed failure showing only "Did the police dispute this failure? No" and a message saying the outcome will be recorded as "Disputed unsuccessfully".](/manage-cases/recording-a-dispute-outcome/not-disputed-step-2-check.png)

### After recording an outcome

After recording the outcome the user is taken back to the case failures page with a success banner saying "Outcome recorded".

Each failure shows the recorded outcome in a summary list with change links.

And the case status updates to reflect progress.

![The case failures page after recording an outcome for the first failure, showing a success banner, an "In progress" tag, and the first failure's outcome displayed in a summary list.](/manage-cases/recording-a-dispute-outcome/disputed-step-6-success.png)

Once all failures have outcomes recorded, the case status changes to "Completed".

![The case failures page with both failures completed, showing a "Completed" tag and summary lists for both outcomes.](/manage-cases/recording-a-dispute-outcome/case-failures-completed.png)

The action is recorded in the activity log, showing the failure reason, police unit, month, and the outcome details.

![The case activity log showing two "DGA outcome recorded" entries by Natasha Rogers, one for a not-disputed failure and one for a disputed failure with full outcome details.](/manage-cases/recording-a-dispute-outcome/activity-log.png)

## Error messages

### Did the police dispute this failure?

- Empty: Select if the police disputed this failure

### Did CPS accept the dispute?

- Empty: Select if CPS accepted the dispute

### Reason for outcome

- Empty: Enter a reason for the outcome
- Too long: Reason for outcome must be 200 characters or less

### How did you discuss this dispute with the police?

- Empty: Select how you discussed this dispute with the police

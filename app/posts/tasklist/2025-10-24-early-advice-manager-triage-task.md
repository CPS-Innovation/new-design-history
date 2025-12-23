---
title: Early advice manager triage task
date: 2025-12-24
---

At the moment, we don’t have a task for Early Advice (EA) cases.

Other tasks were used as a workaround which meant there was:

- no structured way to capture rejection reasons when cases did not meet criteria
- no management information about why cases were rejected or how long triage took
- risk of cases being allocated to the wrong unit or prosecutor

We created this task to solve these problems and ensure early advice cases are properly triaged before being assigned to a prosecutor.

## How it works

When the user starts the task they’re taken to the decision page:

![Decision page showing 'Accept' or 'Reject' radio buttons](/tasklist/early-advice-manager-triage-task/01-decision.png)

They can either accept or reject.

### Accept

If the user selects ‘Accept’, they're taken to a page to select a prosecutor to assign to the case:

![Prosecutor selection page with autocomplete field](/tasklist/early-advice-manager-triage-task/02-accept-prosecutor.png)

The autocomplete shows only prosecutors who are assigned to the case’s unit.

After selecting a prosecutor, the user is taken to the check answers page:

![Check answers page for accept path showing decision as 'Accept' and selected prosecutor](/tasklist/early-advice-manager-triage-task/03-accept-check-answers.png)

When they complete the task:

- The prosecutor is assigned to the case
- The task is marked as completed
- An activity log entry records the action

### Reject

If the user selects ‘Reject’, they're taken to a page to select reasons for rejection.

![Reasons for rejection page showing 13 checkbox options](/tasklist/early-advice-manager-triage-task/04-reject-reasons.png)

The options are:

- Case Material not correctly received
- No/missing Disclosure Schedule
- No MG3
- No/Incomplete Supervisors comments
- No DV Checklist
- No/missing MG11s
- No missing exhibits
- No summary of interview
- Missing Suspect's previous convictions
- Missing Victim/Witness previous convictions
- Hard media not provided
- Third party material not provided
- Incompatible OIC contact details

Each reason has an optional details field that is conditionally revealed when the checkbox is selected.

![Reasons for rejection page with one checkbox selected and conditional details field revealed](/tasklist/early-advice-manager-triage-task/05-reject-reasons-conditional-reveal.png)

After selecting reasons, the user is taken to a page asking for the date the police should respond by.

![Police response date page with date input fields](/tasklist/early-advice-manager-triage-task/06-reject-police-response-date.png)

Next, the user is asked if they want to create a reminder task to follow up with the police.

![Create reminder task page with 'Yes' or 'No' radio buttons](/tasklist/early-advice-manager-triage-task/07-reject-create-reminder-task.png)

If they select 'Yes', a date input field is conditionally revealed:

![Create reminder task page with 'Yes' selected and date input field revealed](/tasklist/early-advice-manager-triage-task/08-reject-create-reminder-task-conditional-reveal.png)

Next, the user is taken to the check answers page:

![Check answers page for reject path showing decision, rejection reasons with details, police response date, and reminder task preference](/tasklist/early-advice-manager-triage-task/09-reject-check-answers.png)

When they complete the task, they see a success message at the top of the case task list. It disappear when refreshing or navigating away.

![Task list page with green success banner saying 'Task completed'](/tasklist/early-advice-manager-triage-task/10-task-completed-success.png)

The action is also recorded in the case activity log.

![Activity log showing 'Task completed: Early advice manager triage' entry](/tasklist/early-advice-manager-triage-task/11-activity-log-entry.png)

## Validation errors

### Decision

- Nothing selected: Select if you accept or reject

### Prosecutor

- Empty: Select prosecutor

### Reasons for rejection

- Nothing selected: Select reasons for rejection

### Details for each rejection reason

- Too long: Details about ‘No MG3’ must be 250 characters or less

### Date the police should respond by

- Empty: Enter date the police should respond by
- Missing day: Date the police should respond by must include a day
- Missing month: Date the police should respond by must include a month
- Missing year: Date the police should respond by must include a year
- Invalid: Date the police should respond by must be a real date
- Must be future: Date the police should respond by must be in the future

### Do you want to create a task to remind you about when the police should respond back to you?

- Nothing selected: Select yes if you want to create a task to remind you about when the police should respond back to you

### Date you’ll be reminded

- Empty: Enter date you’ll be reminded
- Missing day: Date you’ll be reminded must include a day
- Missing month: Date you’ll be reminded must include a month
- Missing year: Date you’ll be reminded must include a year
- Invalid: Date you’ll be reminded must be a real date
- Must be future: Date you’ll be reminded must be in the future
- Must be same or after date: Date you’ll be reminded must be the same as or after the date the police should respond by

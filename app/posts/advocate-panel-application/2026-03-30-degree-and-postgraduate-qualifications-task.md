---
title: Degree and postgraduate qualifications task
date: 2026-03-30
---

This is one of the tasks in the [personal information task list](/advocate-panel-application/asking-new-users-for-personal-information/). 

In this task we ask users for details of their qualifications. For each one the user is asked to enter:

- course or subject
- institution
- grade or result
- date of completion

In the current service the input requires a day for the date of completion, but the hint text says only month and year are required. In the new design we only ask for month and year.

The user must add at least one qualification in order for the task to be marked as complete.

![A page asking the user to enter their qualifications, but not their bar examination results. The user can add a course/subject, institution, grade/result and date of completion. They can then click a grey button to add another or a green button to save and continue.](/advocate-panel-application/degree-and-postgraduate-qualifications-task/degree-postgraduate-qualifications-not-entered.png)

The task uses the [‘add another’ pattern](https://design-patterns.service.justice.gov.uk/components/add-another/) from the Ministry of Justice design system.

The pattern allows a user to add details of ‘qualification 1’ then click ‘Add another qualification’. This creates ‘qualification 2’ underneath the first one, with the same fields to complete.

![A page asking the user to enter their qualifications. One qualification has already been added. The user can now enter details of qualification 2. They can also click a button to remove it.](/advocate-panel-application/degree-and-postgraduate-qualifications-task/degree-postgraduate-qualifications-entered.png)

The user can also use a ‘remove’ button to remove the qualification. 

We’ve included a note on the page telling users that they do not need to give their bar examination results. We know that some users currently include these when they do not need to.

## Further considerations

We should:

- consider whether we could only ask some users for their qualifications
- decide whether the ‘add another’ pattern is the right one to use
- add hint text to the ‘date of completion’ field

### Only asking some users for their qualifications

We know from research that more experienced barristers sometimes question why we need to know about their degree. They feel that their years of practice are more relevant. 

We should find out more about whether degree information is useful to assessors. This would help us understand: 

- whether to continue collecting this information
- whether the qualification question could be asked only for certain application types - for example, for lower level applications where the applicant is likely to have graduated relatively recently

### The use of the ‘add another’ pattern

We should find out in research whether the ‘add another‘ pattern works well for our users. We should also consider alternatives.

One drawback of the pattern is that it relies on JavaScript to work as intended. When JavaScript is not available, the page should reload with the additional form elements if the ‘add another‘ button is pressed.

The Ministry of Justice design system also notes some accessibility issues with the pattern.

If we do continue to use the ‘add another‘ pattern, we should consider whether to show the ‘remove’ button for all qualifications. In the original pattern this button is present for every item which is added. 

In our implementation we’ve removed it for ‘qualification 1‘. This makes some sense because the user needs to add at least one qualification - as a minimum they’ll have a degree.

However taking away the button means that there's no quick way to clear the data in the qualification 1 fields, if the user wants to come back to the question later.

### Adding hint text to the ‘date of completion’ field

We missed out the hint text showing the required format for the date field.

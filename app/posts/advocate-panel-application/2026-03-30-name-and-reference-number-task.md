---
title: Name and reference number task
date: 2026-03-30
---

This is one of the tasks in the [personal information task list](/advocate-panel-application/asking-new-users-for-personal-information/). 

In this task we ask the user for their name and either their:

- bar number - for barristers
- Solicitors Regulation Authority (SRA) number - for solicitors

The task is titled as appropriate, so for barristers it is ‘name and bar number‘.

![A page asking the user for their full name and bar number.](/advocate-panel-application/name-and-reference-number-task/name-bar-number.png)

We focused on barristers in research, so we did not create the solicitor version of the task.

## Name

We ask for the user’s full name as a single field. This follows the [pattern for asking for names in the design system](https://design-system.service.gov.uk/patterns/names/) which notes that:

“A single name field can accommodate the broadest range of name types, but means you cannot reliably extract parts of a name.”

## Bar number or SRA number

This information is used as part of checks that the applicant is a genuine barrister or solicitor.

We focused on the bar number variant because our research scenarios were for barristers.

We’re aware that some users confuse their bar ID with their bar number. The bar number is a five-digit number so we mention this in the hint text.

The current service mentions that the bar number can be found in the ‘bar portal’. We decided to remove this since there may be other places where they can find their bar number. 

We don’t have evidence that sending them to the portal is the most helpful advice.

## Further considerations

We need to think about:

- whether to use multiple fields for the name
- whether we need to ask for the name at all

### Using multiple fields for the name

We need to consider whether the service could use a single name field or whether it requires multiple, as in the current service.

### Asking for the name

We do not yet know enough about the account creation journey to know whether we need to ask for the name.

It’s possible that the chosen authentication solution will require the user to give their name. If so then we could:

- choose not to mention the name here at all
- replay it here (or elsewhere in the task list) and not allow changes, since they’ve only just entered it into the authentication service
- replay it here and allow changes

If we do not ask for the name then this task will only have one question. We could consider whether to move the bar number or SRA number question to another task and remove this one.

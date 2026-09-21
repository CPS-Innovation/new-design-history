---
title: Where you work task
date: 2026-03-30
---

This is one of the tasks in the [personal information task list](/advocate-panel-application/asking-new-users-for-personal-information/). 

In this task we ask the user where they work. The three options are:

- chambers
- sole trader
- solicitors’ firm

![A page asking the user whether they work in chambers, as a sole trader or in a solicitors’ firm.](/advocate-panel-application/where-you-work-task/where-you-work.png)

The CPS does not send post to users as part of the application process. This information is however useful as part of checks that the applicant is a genuine barrister or solicitor.

## Sole trader or solicitors’ firm

If the user is a sole trader or works at a solicitors’ firm, they need to enter the name and address of the business.

![A page asking for a sole trader’s address.](/advocate-panel-application/where-you-work-task/sole-trader-work-address.png)

![A page asking for a solicitors’ firm’s address.](/advocate-panel-application/where-you-work-task/solicitors-firm.png)

## Chambers

The CPS maintains a list of barristers’ chambers, so this is handled differently.

![A page asking for the name of the user’s chambers. There’s an autocomplete field, with a link underneath saying “I can’t see my chambers in the list”. There’s a green button marked ‘Save and continue’ and a grey one marked ‘Clear address’.](/advocate-panel-application/where-you-work-task/chambers-name--not-selected.png)

We use the [accessible autocomplete component from X-GOV.UK](https://govuk-prototype-components.x-govuk.org/autocomplete/), which includes common components which are not yet part of the GOV.UK design system. 

The accessible autocomplete is widely used across government and is actively maintained. It works if Javascript is not functioning, becoming a standard select list.

The user starts typing then chooses their chambers from the list which is shown.

The chosen chambers is displayed underneath the autocomplete, using the [add multiple things pattern](https://design.homeoffice.gov.uk/design-system/patterns/help-users-to/add-multiple-things) from the Home Office design system.

![The chambers name page with a chambers selected. The name and address are shown underneath the link which says “I can’t see my chambers in the list”.](/advocate-panel-application/where-you-work-task/chambers-name--selected.png)

### Adding chambers

We give users the option to enter their chambers manually if they cannot find them in the autocomplete.

In an early version of the prototype we had an ‘add new chambers’ button. However we decided that this was too likely to encourage users to add a chambers rather than checking whether it was already in the list.

Instead we have a link reading “I can’t see my chambers in the list”. This wording is taken from the Home Office pattern.

If the user clicks the link then they’re taken to a page which is similar to the one asking for a sole trader or solicitors’ firm address.

![A page asking for the chambers address.](/advocate-panel-application/where-you-work-task/chambers-details.png)

If the user completes this page, the details are reviewed by CPS administrative staff. They add the chambers to the official list if necessary. 

A line of content at the top of the page explains this.

## Further considerations

We should consider:

- not asking sole traders for their address
- keeping a list of solicitors’ firms
- finding out whether users ever want to pick more than one place of work

### Not asking sole traders for their address

In the current service applicants are asked whether they want to add an additional correspondence address.

We’ve removed this question following conversations with CPS administrative staff, since it’s normally used for a home address. The CPS does not send post to panel members, so there is not a strong need to gather and store this personal information.

Sole traders will sometimes need to give a home address as their main address. We could consider removing this requirement, but it may have an impact on CPS’s ability to check that an application is genuine.

### Keeping a list of solicitors’ firms

We could treat solicitors’ firms in the same way as barristers’ chambers. 

This would mean that users could choose a firm using an autocomplete instead of having to enter the details. However it would also create an administrative burden as we’d need to be able to check proposed additions to the list of firms.

### Picking more than one place of work

The current service only allows a user to choose one place of work. We’ve assumed that this is acceptable to users.

We could check whether users ever work in more than one place and what they would enter in that case.

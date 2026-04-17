---
title: Application submission confirmation page
date: 2026-04-08
---

After a user submits their application, they’re shown a page which uses the [confirmation page pattern](https://design-system.service.gov.uk/patterns/confirmation-pages/) from the GOV.UK design system.

The page tells the user:

- their application reference number
- that a [confirmation email](/advocate-panel-application/email-notifications) has been sent to them, including a copy of their application
- what will happen next

It also includes a link back to their profile, so they can:

- make another application - it’s possible to apply for more than one panel at a time 
- check the status of their application - they will not need to do this straight away, but we’re letting them know that they can return later
- check if the CPS has received their reference - they’ll also get an email to notify them of this

## How the content varies by panel and level

For testing we created content for:

- general crime level 1
- an upgrade to general crime level 4

The differences are in how long it will take the CPS to respond to the application.

### General crime level 1

A user can make a general crime level 1 application at any time of the year. The confirmation page explains that after their reference is received:

- the service will send an email to the user
- their application will be assessed within a month

![Confirmation that the application has been submitted, with information about what happens next. It’s tailored for general crime level 1.](/advocate-panel-application/application-submission-confirmation-page/confirmation--general-crime-level-1.png)

This is a change from the current service, which says that the user will get an answer within one month of applying. 

That assumes that the reference will be received quickly and is therefore sometimes inaccurate.

### Upgrade to general crime level 4

The confirmation page is different for general crime level 4 because applications must usually be made between 1 and 30 September. This is often known as the application window.

The page tells the user that they will receive the result by the end of January. CPS administrative staff told us that results are sent out as a batch in late December or in January. 

![Confirmation that the application has been submitted, with information about what happens next. It’s tailored for an upgrade to general crime level 4.](/advocate-panel-application/application-submission-confirmation-page/confirmation--general-crime-upgrade-level-4.png)

The current service says that the user will hear in ‘3 to 4 months’. This creates uncertainty and may not be accurate for someone who applied at the start of the September window.

We think that it’s better to give the end of January as the worst case scenario.

## Further considerations

We should:

- write content for other situations
- consider giving contact details for the CPS on the confirmation page

### Content for other situations

The content in the prototype will work for many panel and level combinations. We may need to write content for other situations, such as:

- temporary membership of the general crime panel at levels 2 to 4, which has different deadlines
- applications outside of the 1 to 30 September ‘window’ which are allowed under certain circumstances

For example, if the user is a London secondee and applies for an upgrade to general crime level 4 then they can apply at any time. We’ll need different content, since the user won’t get the result by the end of January.

We should avoid phrases like ‘in 3 to 4 months’ and instead give a deadline.

Another situation which needs tailored content is when an application needs a ‘pre-qualification assessment’ due to the responses in the [background disclosure task](/advocate-panel-application/background-disclosure-task).

### Contact details on the confirmation page

The confirmation page in the prototype does not include a contact email address for the CPS. We should consider adding it. 

It’s unlikely, though, that a user will need to get help straight away. It may be enough to include the email address in the confirmation email.

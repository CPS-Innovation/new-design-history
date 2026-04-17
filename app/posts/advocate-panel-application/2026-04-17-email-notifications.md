---
title: Email notifications
date: 2026-04-17
---

The current service sends emails to applicants and referees at various points in the application process. In many cases there are variants based on the panel and level being applied for.

Creating new versions of all the emails was out of scope for the initial phase of work. However, we created: 

- a submission confirmation email to use in research
- an email asking a referee to provide a reference - this is covered in the design history entry about the [referee journey](/advocate-panel-application/referee-journey)

In the current service the submission confirmation email includes a copy of the application as an attachment. We’ve assumed that the new service will do the same.

The email also tells the applicant: 

- what will happen next
- how to get help

For general crime level 1, we tell the user that we’ll: 

- email them when we receive their reference
- assess their application within a month of receiving their reference

![An email telling the user that they’ve submitted their application for general crime at level 1. It says that the application is attached, says what will happen next and gives contact details for the CPS.](/advocate-panel-application/email-notifications/application-submitted-email--level-1.jpeg)

For general crime level 4, the reference is optional. For the purposes of the research, we assumed that the user had given a reference.

The email says that we’ll: 

- email them when we receive their reference
- assess their application by the end of January 2027

There are notes about this date in the design history entry about the [submission confirmation page](/advocate-panel-application/application-submission-confirmation-page).

![An email telling the user that they’ve submitted their application for general crime at level 4. It says that the application is attached, says what will happen next and gives contact details for the CPS.](/advocate-panel-application/email-notifications/application-submitted-email--level-4.jpeg)

## Further considerations

We should:

- consider using GOV.UK Notify to send emails
- assess what emails are sent
- improve the email content

### Using GOV.UK Notify

We recommend using [GOV.UK Notify](https://www.notifications.service.gov.uk/), which is the free cross-government service for sending emails. 

We prototyped the submission confirmation email and reference request email using Notify’s preview feature. 

Using Notify in the new service would mean that:

- emails would follow a consistent government format
- we could easily track delivery rates
- we could update templates without a code release, as long as the templates did not require complex logic

CPS branding for email headers is already available in Notify.

### What emails are sent

We should check what emails are sent to users and consider whether we could:

- stop sending some emails
- send additional emails

For example, we could consider sending a reminder if the end of the application window is approaching and the user has not yet submitted their application. 

### Email content

We’ll need to write content for all the emails which we decide to send. This will mean getting a good understanding of all the current variants.

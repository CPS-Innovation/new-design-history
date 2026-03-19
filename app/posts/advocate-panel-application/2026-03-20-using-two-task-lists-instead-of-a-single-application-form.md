---
title: Using two task lists instead of a single application form
date: 2026-03-20
---

The current service presents users with a long, single page application form.

The contents of the form are generated based on:

- whether the user is a barrister or solicitor
- whether they have higher rights of audience, allowing them to work in Crown Courts – if they’re a solicitor
- the panel they’re applying for
- the level they’re applying for
- whether they’re applying for their first panel or whether they’re upgrading to a higher level

The form includes a mix of questions including:

- personal details such as the user’s qualifications
- preferences such as where they want to practice
- equality monitoring questions
- screening questions about things like whether they have a criminal record - the application goes through a ‘pre-qualification’ process if the users answers yes to any of these questions
- questions about their skills and experience, which are the core of the application

For a returning user, some of this information will already be filled in when their application form is generated.

Some of the information is also included in a section of the service called ’my profile’, meaning that it can be viewed and edited in more than one place.

## Why we made a change

We know that users of government services find it hard to complete long, single page forms. 

For this service, specific issues include:

- the service timing out while users are in the middle of working on the form
- concerns about the placement of the equalities monitoring questions

### The service timing out

The current service signs users out after a certain amount of time. 

Research participants mentioned this causing them problems, as did people using the in-service feedback form. 

Some users did not realise that the service had timed out and continued adding information, only realising that there was a problem when they tried to save the form.

Since the form is a single page, users may have added quite a lot of information before discovering that the service has timed out. They then need to copy and paste out any information as it cannot be saved.

### Concerns about the placement of the equalities monitoring questions

The equalities monitoring section is extensive. It ranges from relatively straightforward questions about age to questions about the user’s parents’ employment.

Several participants in research said that the questions seemed misplaced in the middle of the application form.

One participant in research wondered whether their reponses might affect their application. Guidance in the current service says that this is not the case, but in research we saw that users did not read it.

## What we did

We decided to use the standard [cross-government task list pattern](https://design-system.service.gov.uk/components/task-list/).

This presents a list of tasks which can be completed in any order. Once they are all completed, the user can continue.

We created two task lists:

- a ‘personal details’ task list, including things about the user which typically will not change from one application to another
- an ‘application form’ task list, including things which are specific to the application

We drew a diagram to suggest how questions could be divided between these two list.

There are also some questions which appear outside the task lists. This is because they answers are needed in order to generate the task lists.

![Diagram comparing the current single application form with two task lists, showing what will be included in each task list.](/advocate-panel-application/using-two-task-lists-instead-of-a-single-application-form/task-list-split-diagram.png)

### Personal details task list

The user will only be taken to the personal details task list if we do not already have their details. This will usually be because they have not applied before. 

Before we can generate this task list, we need to know whether the user is:

- a barrister
- a solicitor with higher rights of audience, allowing them to work in Crown Courts
- a solicitor who wants to work in Magistrates’ or Youth Courts

This is because: 

- we ask solicitors for different personal details
- solicitors wanting to work in Magistrates’ or Youth Courts do not need to choose a panel or level, so after the personal details task list they can skip straight to their profile

The personal details task list asks users for:

- their name and either their bar number for barristers, or Solicitors Regulation Authority (SRA) number for solicitors
- where they work - they choose from a list of barristers’ chambers, or give address details if they’re a sole trader or work for a solicitors’ firm
- their prefered circuits and courts
- the year when they were called to the bar ETC

![Diagram comparing the current single application form with two task lists, showing what will be included in each task list.](/advocate-panel-application/using-two-task-lists-instead-of-a-single-application-form/personal-details-task-list.png)

## Further considerations

Splitting the application form 

### Gathering personal details through a linear journey

The application form works well as a task list, since several of the tasks require free text entry of up to 400 words.

We know from research that many users write this information in a word processor and then paste it in to the current service. However, we still expect that some users will want to return to make changes to their responses.

This would be awkward to do in a linear flow.

It is less clear that the task list pattern is a good fit for the personal details. These are relatively straightforward and may work better as a linear registration flow.

Research on the new design may help to 

### How the personal details task list is presented

We’ve presented the personal details as finishing creating a user’s account. 

We want to find out in research how well this works for users. 

However, it will be difficult to get reliable findings because we will not be testing a design for the registration journey. This is because the authentication method has not yet been decided upon.


---
title: Background disclosure task
date: 2026-04-07
---

This is one of the tasks in the [application form task list](https://cps-new-design-history-2189687bc35a.herokuapp.com/advocate-panel-application/application-form-task-list/).

It should only be shown to users who have not been accepted to a CPS advocate panel. 

For testing, we showed this task if the user chose to apply for level 1 general crime. In reality a user could apply at a higher level for their first CPS advocate panel.

The task presents a series of questions asking the user to disclose relevant background information. For example, the applicant is asked if they’ve been the subject of:

- a criminal investigation
- disciplinary action by their professional body, regulator or a former employer

This screenshot shows a typical page.

![A question asking the user if they’ve ever been the subject of a criminal investigation.](/advocate-panel-application/background-disclosure-task/background-disclosure--criminal-investigation.png)

If the user answers yes to any of the questions, they’re asked to give details.

In the current service, users are shown one text area to add details even if they say yes to multiple questions. 

Since the new design uses one page per question, we’ve added a separate text area to each page. This allows the user to add details in the context of the specific question.

We considered the alternative of collecting all the details on a single page at the end of the task, but felt it would be harder for users to remember what they had said yes to.

![A question asking the user if they’ve ever been the subject of a criminal investigation. The user has chosen ‘yes’, revealing a text box where they can enter more details.](/advocate-panel-application/background-disclosure-task/background-disclosure--criminal-investigation-yes.png)

After completing all the questions, the user is shown a check your answers page before the task is marked as complete.

![A list of the user’s responses to the background disclosure questions. It includes the details entered after the user said yes to one of the questions.](/advocate-panel-application/background-disclosure-task/background-disclosure--check-answers.png)

## Why we called it 'background disclosure'

In the current service this section is called the 'pre-qualification questionnaire'. We felt this was misleading as it sounds like it is about the user’s academic qualifications.

We decided to try 'background disclosure' as an alternative. We also considered ‘screening questions’.

In the research sessions, participants did not seem to be confused by the new name.

## What happens if a user answers yes

Answering yes to any of these questions does not automatically prevent the user from completing and submitting their application. 

The application is instead sent to a pre-qualification assessor. As usual, the user is sent an email to say that the application has been submitted. The email refers to the fact that it’s being sent for a special assessment.

If the application passes that assessment, it moves straight to ‘submitted’ status and is assessed as normal. The background disclosure answers are not passed to the main assessors. 

If it does not pass the pre-qualification assessment, the application is rejected.

In the current service, the user must complete their entire application even if they answer yes to one of the pre-qualification questions. This allows the application to move directly to submitted status if it passes, rather than being delayed.

## Further considerations

We should consider:

- moving the task to the personal information task list
- moving the task within the task list
- improving the wording of the quesions

### Moving the task to the personal information task list 

We put the task into the application form task list because: 

- we thought that we needed to show it to all applicants at level 1
- the CPS does not want users to change their answers for subsequent applications

The former is not true. In fact, we need to show it to all applicants who are not yet on a panel. We’ll be able to assess this as soon as the user signs in to the service, so we could include the task in the personal information task list.

The latter means that we’d need to give more thought before moving the task. The general idea is that anything in the personal information task list:

- will appear in the user’s profile, meaning that it does not need to be re-entered for a subsequent application
- can be edited before the user makes an application

The CPS has a different process if someone who is already on a panel is arrested, for example. They do not want users to update the information in their profile.

We could choose to move the task anyway and either:

- not show the answers in the profile
- show the answers but not allow users to edit them

If we do move the task then it introduces the possibility of preventing users from progressing to the application form if they say yes to any of the questions. 

The responses could then be assessed and the user could be told to proceed only if they pass the pre-qualification assessment.

This would be a change to the existing process. It might be good for users, who would not need to waste time filling in a full application only to be rejected in the pre-qualification assessment.

However, it might slow down users’ applications since they’d need to return to the service to complete their application. This would not be such a problem for a level 1 general crime application as there’s no deadline. It may be more of a problem for other applications.

### Moving the task within the task list

During the playback of the prototype work at the end of the phase, concerns were raised that a user may find it jarring to encounter background disclosure questions after writing detailed examples of their work.

We did not see evidence of this in the research sessions, but we could look out for it if we decide to keep the task within the application form task list.

### Wording of the questions

The wording of the background disclosure questions has not been significantly changed from the current service. 

These are sensitive questions and the wording should be reviewed carefully.

---
title:  Linear version
description: Would a linear journey work better than task list options?
date: 2023-01-06
---

* As part of our initial testing we were trying to see whether a task list, personalised task list, linear journey or other would be the best way to structure the service.

* tl:dr - this is the better option


<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
       text: "1. Linear journey",
       caption: "This is a fairly standard GDS style linear journey. The user has guidance up front and then is asked a series of questions that branch off depending on their answers to figure out what and how much they are entitled to claim.  <br /><br /> <b>User Research</b><br /><br />Users preferred this option, it was clearer and simpler than the task list.<br /> Users expected to the able to enter their claim amounts after being asked to claim.<br /> We thought they may find it too long, but they didn't.",
      img: { src: "1.jpeg" }
    }
         

            

  ]
}) }}



<!-- ## User research -->
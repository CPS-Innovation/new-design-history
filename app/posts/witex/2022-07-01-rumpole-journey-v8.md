---
title:  Task list variation
description: Should it use the standard linear journey or would a task list or similar be better?
date: 2023-01-05
---

* We wanted to test a couple of different ways the user could move through the journey - a standard linear journey, a task list and a personalised task list where users choose what they want to claim and then see it presented as a task list.

* This is the task list version. 

* tl:dr - it worked ok but users preferred the linear version.




<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
       text: "1. Start",
       caption: "A rough start page. Not really testing in detail at this point, is just to get the user through and to see the linear vs task list journey.  <br /><br /> <b>User Research</b><br /><br />Not really testing this at this point ",
       img: { src: "1.png" }
    }, 
    {
       text: "2. Details",
       caption: "Again a rough screen to make the journey seem a bit more believable. Not really testing in detail at this point  <br /><br /> <b>User Research</b><br /><br />Not really testing this at this point ",
        img: { src: "2.png" }
    },
        {
      text: "3. Email confirmation",
       caption: "Again a rough screen to make the journey seem a bit more believable. Not really testing in detail at this point  <br /><br /> <b>User Research</b><br /><br />Not really testing this at this point ",
        img: { src: "3.png" }
    },
        {
      text: "4. Who are you claiming for",
       caption: "Again a rough screen to make the journey seem a bit more believable. Not really testing in detail at this point  <br /><br /> <b>User Research</b><br /><br />Not really testing this at this point ",
        img: { src: "4.png" }
    },
        {
      text: "5. Task list",
       caption: "We wanted to test the task list idea against a conventional linear journey to see if it was easy to use and helped users understand what they could claim upfront. <br /><br/>This is still fairly rough but the idea was to split the things that users could claim for - travel, food, overnight stays etc into sections on the task list, they would then choose the relevant ones and fill them in (there is a variant on this where users chose which ones were relevant first and were then shown a tailored task list) <br /><br /> There were several hypothesis behind this:<br /><br /> - Users wouldn't have to go through the whole form and see irrelevant stuff<br /> - Users could fill in each section when they wanted to, rather than in a set order<br /> - Users can see upfront what they could claim for and get things like receipts ready<br /> - Save and continue would likely work better with this format   <br /><br /> <b>User Research</b><br /><br />It sort of worked, users were receptive to it and were generally positive. <br /><br />However they preferred the linear version. We also noticed some things that would be an issue, users said they wanted to do receipts all in on go at the end of the process however they usually missed the section to upload receipts in this version. They were also sometimes confused, thinking they had to fill everything out even if the secton was not relevant.",
        img: { src: "5.png" }
    }

            

  ]
}) }}



<!-- ## User research -->
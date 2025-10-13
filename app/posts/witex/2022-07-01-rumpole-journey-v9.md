---
title:  Personalised task list variation
description: Should it use the standard linear journey or would a task list or similar be better?
date: 2023-01-05
---

* We wanted to test a couple of different ways the user could move through the journey - a standard linear journey, a task list and a personalised task list where users choose what they want to claim and then see it presented as a task list.

* This is the personalised task list version. 

* tl:dr - it didn't really work as users assumed they were going to put the details in as they were doing the personalisation, and they preferred a linear version.




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
      text: "5. Your job",
       caption: "This is rough, but was trying to see how users react to choosing the things they wanted to claim for upfront. We weren't really testing the detail on this page   <br /><br /> <b>User Research</b><br /><br />Users generally understood that answering yes or no would allow them to claim or not but they didn't all connect it with the task list that shows later, they assumed they would be able to enter amounts after these qualification screens. ",
        img: { src: "5.png" }
    },
                {
      text: "6. Overnight stay",
       caption: "This is rough, but was trying to see how users react to choosing the things they wanted to claim for upfront. We weren't really testing the detail on this page   <br /><br /> <b>User Research</b><br /><br />Users generally understood that answering yes or no would allow them to claim or not but they didn't all connect it with the task list that shows later, they assumed they would be able to enter amounts after these qualification screens.",
        img: { src: "6.png" }
    },
                    {
      text: "7. Travel costs",
       caption: "This is rough, but was trying to see how users react to choosing the things they wanted to claim for upfront. We weren't really testing the detail on this page   <br /><br /> <b>User Research</b><br /><br />Users generally understood that answering yes or no would allow them to claim or not but they didn't all connect it with the task list that shows later, they assumed they would be able to enter amounts after these qualification screens.",
        img: { src: "7.png" }
    },
                    {
      text: "8. Childcare",
       caption: "This is rough, but was trying to see how users react to choosing the things they wanted to claim for upfront. We weren't really testing the detail on this page   <br /><br /> <b>User Research</b><br /><br />Users generally understood that answering yes or no would allow them to claim or not but they didn't all connect it with the task list that shows later, they assumed they would be able to enter amounts after these qualification screens. ",
        img: { src: "8.png" }
    },

                        {
      text: "9. Pet sitting",
       caption: "This is rough, but was trying to see how users react to choosing the things they wanted to claim for upfront. We weren't really testing the detail on this page   <br /><br /> <b>User Research</b><br /><br />Users generally understood that answering yes or no would allow them to claim or not but they didn't all connect it with the task list that shows later, they assumed they would be able to enter amounts after these qualification screens. ",
        img: { src: "10.png" }
    },
        {
      text: "10. Task list",
       caption: "This task list updated to only show the criteria that everyone had to fill out (e.g. food) or the areas that users had said yes to earlier. This meant that users didn't see areas that they didn't want to claim for and had been primed with more info about how much they could claim and what they needed. <br /><br/> <br /><br /> There were several hypothesis behind this:<br /><br /> - Users wouldn't have to go through the whole form and see irrelevant stuff<br /> - Users could fill in each section when they wanted rather than in a set order<br /> - Users can see upfront what they could claim for and get things like receipts ready<br /> - Save and continue would likely work better with this format   <br /><br /> <b>User Research</b><br /><br />It sort of worked, users were receptive to it and were generally positive.<br /><br />They didn't all connect the questions they were asked earlier,  <br /><br />However they preferred the linear version. We also noticed some things that would be an issue, users said they wanted to do receipts all in on go at the end of the process however they usually missed the section to upload receipts in this version. ",
        img: { src: "11.png" }
    }

            

  ]
}) }}



<!-- ## User research -->
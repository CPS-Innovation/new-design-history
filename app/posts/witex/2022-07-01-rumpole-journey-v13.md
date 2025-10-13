---
title:  First guidance
description: First draft prototype of the guidance content
date: 2023-01-12
---

* One of the problems with the current process is that users don't know what they can claim before they get the blue forms. One of our hypothesis is that providing good quality guidance earlier in the journey will help users know what they can and can't claim.

* This is a first draft of what they guidance could look like

<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
       text: "1. How to claim",
       caption: "The first page explains how and where to claim expenses with a link to the service  <br /><br /> <b>User Research</b><br /><br />The link to the service is a bit too subtle and could be missed by users. We discussed integrating the guidance and the service start page to make it clearer.",
      img: { src: "1.png" }
    },
        {
       text: "2. Travel",
       caption: "We simplified the travel information into an easily read table.  <br /><br /> <b>User Research</b><br /><br />Where info is there it is mostly clear and helps users know what they can claim for up front.",
      img: { src: "2.png" }
    },
        {
       text: "3. Overnight stays",
       caption: "Our first attempt to simplify the complicated policy and amounts around overnight stays.  <br /><br /> <b>User Research</b><br /><br />Still too long and confusing, we need to refine again",
      img: { src: "3.png" }
    },
        {
       text: "4. Food and drink",
       caption: "Outlining the amounts for food and drink that users can claim  <br /><br /> <b>User Research</b><br /><br />Mostly clear but needs to talk about whether receipts are needed.",
      img: { src: "4.png" }
    },
        {
       text: "5 Loss of earnings",
       caption: "First attempt to make loss of earnings clear for users.  <br /><br /> <b>User Research</b><br /><br />",
      img: { src: "5.png" }
    },
        {
       text: "6. Care and childcare",
       caption: "  <br /><br /> <b>User Research</b><br /><br />Needs more info about what Ofsted is and how they can find out if their childcare provider is registered",
      img: { src: "6.png" }
    },
        {
       text: "7. Pet sitting",
       caption: "  <br /><br /> <b>User Research</b><br /><br />Is clear but users express the same suprise as they do when they find it in the journey and were concerned that it could be taken advantage of and people could easily put in fake claims.",
      img: { src: "7.png" }
    },
        {
       text: "8. Other expenses",
       caption: " <br /><br /> <b>User Research</b><br /><br />This is clear.",
      img: { src: "8.png" }
    }
       
        
          
  ]
}) }}



<!-- ## User research -->
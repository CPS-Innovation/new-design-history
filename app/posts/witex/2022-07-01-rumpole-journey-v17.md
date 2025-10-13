---
title:  I don't have all my receipts
description: The policy was tweaked to allow users who didn't have all their receipts to give us a 'good reason' in order to get paid
date: 2023-01-17
---

* The policy was changed so that users who could not go back and get receipts (e.g. for train, bus, taxi etc) could give us a good reason why they did not have their receipts, and the team at wakefield can use their judgement on whether to pay them or not.


<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
       text: "1. On one screen",
       caption: "First sketch of asking for amount and reason for not having it on one page. At first i thought it breaks one thing per page but it is asking about your train tickets which is one thing. Is an early version and changed later so this version was not tested.  <br /><br /> <b>User Research</b><br /><br />This was not tested.",
      img: { src: "1.png" }
    },
        {
       text: "2. Question on same page variation",
       caption: "This was a sketch of a variation that tested asking if the user has all, some or none of their receipts. A simpler version was sketched later so this was not tested.  <br /><br /> <b>User Research</b><br /><br />Not tested.",
      img: { src: "1b.png" }
    },
        {
       text: "3. Question at the end, broken into two",
       caption: "This was to test putting the questions at the end and breaking them up into separate questions. Wasn't sure about asking about missing receipts after the user has uploaded as this could be confusing.  <br /><br /> <b>User Research</b><br /><br />This version was not tested.",
      img: { src: "2.png" }
    },
        {
       text: "4. Question on the upload screen",
       caption: "This version works by simply asking if the user has missing receipts on the upload screen. We did not test this as we did not think it clear enough. All users would have to see the upload page even if they did not have any receipts, then they would have to either scroll or read content on this page to see what to do. By putting a link on here, we would effectively be asking the user a question about whether they had their receipts or not, would rather break that question out and make it more obvious and clearer. <br /><br /> <b>User Research</b><br /><br />This version was not tested.",
      img: { src: "3.png" }
    },
        {
       text: "5. Break up question from amount, 3 options",
       caption: "This is a simplified and combined option that we saw earlier, the user will be asked the question about receipts straight after they have been asked the question about amounts. ",
      img: { src: "3b.png" }
    },
            {
       text: "6. Options on same page as amount question. To be tested",
       caption: "One version to test is to have the amount and the question about whether the user has receipts on one page. 3 options in radio buttons. Depending on what the user is claiming they may or may not see the upload receipts option later.  <br /><br /> <b>User Research</b><br /><br />t.b.c",
      img: { src: "4.png" }
    },
            {
       text: "7. Options at the end of the process, at same time as uploading. To be tested",
       caption: "We tested a second version that asked the questions about whether the user has their receipts at the end of the process just before they are asked to upload their receipts.  <br /><br /> <b>User Research</b><br /><br />t.b.c.",
      img: { src: "5.png" }
    }
       
        
          
  ]
}) }}



<!-- ## User research -->
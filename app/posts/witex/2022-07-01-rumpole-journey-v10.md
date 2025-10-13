---
title:  Where should the receipts be uploaded
description: Should users upload the receipts at the start, as they go or at the end
date: 2023-01-07
---

* We wanted to test a couple of different ways the user could upload receipts - at the start, as they go or at the end.

* tl:dr - upload at the end.


<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
       text: "1. At the start",
       caption: "Not really an option as users quite often didn't know what they could claim for and we couldn't tell them what receipts they should upload. We were hoping we could identify or mark what the receipts were at the beginning of the journey to simplify the process but it did not work.  <br /><br /> <b>User Research</b><br /><br />Not really an option",
      img: { src: "blank.jpeg" }
    }, 
    {
       text: "2. As the user enters amounts",
       caption: "This seemed like a logical way to upload receipts. When the user puts in the amount they would upload the receipt at the same time.  <br /><br /> <b>User Research</b><br /><br />Users didn't really like this and volunteered that they would prefer to do it at the end. It is easier for them to gather everything together all at once and upload in one go.",
        img: { src: "1.jpeg" }
    },
        {
      text: "3. At the end",
       caption: "This option lets the user upload all their receipts in one go at the end of the process. The user will have been through the rest of the process and will know what they can claim for and how much. They only need to upload once.  <br /><br /> <b>User Research</b><br /><br />Users prefered this option to the others. Doing it once, at the end was seen as easier and simpler by a majority of users tested. <br />< br />Users would find it helpful for us to remind them here what they need to upload and how much they have claimed for. e.g. £20 of train tickets.",
        img: { src: "2.jpeg" }
    }
         

            

  ]
}) }}



<!-- ## User research -->
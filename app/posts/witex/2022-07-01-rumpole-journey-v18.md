---
title:  Overnight stay changes
description: Overnight stay was a little confusing for users so we updated the content and journey to make it clearer
date: 2023-01-17
---

* The policy was confusing users so we simplified the way it was presented by combining allowances into one and changing the order and content on the journey to make it clearer.


<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
       text: "1. Choose whether to claim",
       caption: "Simplified and clearer content. For instance the first bullet is clearer about what the specific crtieria is.  <br /><br /> <b>User Research</b><br /><br />Clear to users",
      img: { src: "1.png" }
    },
        {
       text: "2. Did you pay? Yes",
       caption: "We've swapped around the questions so users are not longer asked if the court paid.  <br /><br /> <b>User Research</b><br /><br />Users preferred this option, it was clearer and simpler.",
      img: { src: "2.png" }
    },
        {
       text: "3. Why did you have to stay?",
       caption: "Options have been clarified to make the reasons more specific.  <br /><br /> <b>User Research</b><br /><br />Clear",
      img: { src: "3.png" }
    },
        {
       text: "4. How much did it cost?",
       caption: "This was tweaked to ask the user to enter the full amount they paid for accomodation. <br /><br /> <b>User Research</b><br /><br />Is clear, users put in the full amount but know they will only get £95 back.",
      img: { src: "4.png" }
    },
        {
       text: "5. Did you pay? No",
       caption: "",
      img: { src: "2b.png" }
    },
            {
       text: "6. Did you stay with friends and family? Yes",
       caption: "  <br /><br /> <b>User Research</b><br /><br />This is clear",
      img: { src: "3b.png" }
    },
            {
       text: "7. Why did you have to stay?",
       caption: "Same as point 3   ",
      img: { src: "4b.png" }
    },
            {
       text: "8. Did you stay with friends and family? No",
       caption: "",
      img: { src: "3c.png" }
    },
                {
       text: "8. Did you have to pay for an evening meal?",
       caption: "Content made simpler and clearer  <br /><br /> <b>User Research</b><br /><br />Users understood this.",
      img: { src: "4c.png" }
    }
       
        
          
  ]
}) }}



<!-- ## User research -->
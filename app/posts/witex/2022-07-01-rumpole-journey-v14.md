---
title:  Food variations
description: Variations on asking for how long a user has been in court to determine the food allowance they could claim
date: 2023-01-14
---

* Users can claim a fixed allowance to cover food costs whilst away from home or work.

* We tried several variations of this pattern to get it right, the pattern is used in other places in the design when we are asking similar questions about time away from home or work.

<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->




{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
       text: "1a. Less than 5 hours",
       caption: "Early version before the MVP changed to only be one day in court. Is similar to how the current form handles the questions.  <br /><br /> <b>User Research</b><br /><br />Doesn't really work - users would put hours in the boxes, they didn't know it included time out of the office and they didn't know what the next pages contained which made it confusing when they got to those pages",
      img: { src: "1.png" }
    },
        {
       text: "1b. 5 to 10 Hours",
       caption: "As above",
      img: { src: "2.png" }
    },
        {
       text: "1c. More than 10 hours",
       caption: "As above",
      img: { src: "3.png" }
    },
        {
       text: "2. 1 day or less, how many hours",
       caption: "A version for the MVP where we only have users that have 1 day or less in court.   <br /><br /> User Research</b><br /><br />Better than the previous version but doesn't really work. Users seemed to struggle to put the time in and didn't really like it.",
      img: { src: "4.png" }
    },
        {
       text: "3. What time did you leave and come back",
       caption: "Trying to work out how much they can claim by asking them what time they left and returned home. We would calculate the hours and tell them how much they would get.  <br /><br /> <b>User Research</b><br /><br />Better than the previous version but still not really liked or seen as easy to use. We also saw multiple variations in how to put the time in that may make it difficult to build",
      img: { src: "5.png" }
    },
        {
       text: "4. How many hours radio",
       caption: "Radio button to choose which category they want to claim for.  <br /><br /> <b>User Research</b><br /><br />Was seen by users as the simplest and easiest to use and understand, they just had to click one option - they didn't seem to have trouble with working out which one they would choose. Preferred option out of all the food options.",
      img: { src: "6.png" }
    }
       
        
          
  ]
}) }}



<!-- ## User research -->
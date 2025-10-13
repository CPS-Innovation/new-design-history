---
title:  Redaction Log
description: Sketches of a GDS design version of redaction log
date: 2022-04-01
---

* We have made 2 sketches of the redaction log journey - 1. Using the GDS patterns in a traditional way and 2. Keeping the GDS look and feel but keeping the general layout of what has currently been built

* The version that uses the GDS patterns in a traditional way would work for a citizen facing service that is used infrequently. However lawyers are used to the existing service and would be using this service a lot, we've found from research that they tend to prefer fewer clicks and to save time when entering info. It is likely (although we have not tested it yet) that the second version would be a better fit.


<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
      text: "1. Traditional GDS Version - Start",
       caption: "<br/>- Existing page re-jigged to fit in a GDS style start page",
       img: { src: "gds1.png" }
    }, 
    {
      text: "2. Traditional GDS Version - Add the case details",
        caption: "Add the details of the case the redactions are part of.",
        img: { src: "gds2.png" }
    },
        {
      text: "3. Traditional GDS Version - Add redaction details",
       caption: "Add the redactions one by one to the case, clicking 'add another redaction' at the bottom will let the user add more redactions to the case.
        ",
        img: { src: "gds3.png" }
    },
            {
      text: "4. Traditional GDS Version - Check answers",
       caption: "Plays back the answers entered on the previous screens for the user to double check them",
        img: { src: "gds4.png" }
    },
    
                {
      text: "5. Traditional GDS Version - Confirmation",
      caption: "Confirms that the redaction log has been submitted successfully",
      img: { src: "gds5.png" }
    },
     
    {
          text: "1. Hybrid Version - Start",
      caption: "",
         img: { src: "other1.png" }
    },
  
        {
          text: "2. Hybrid Version - Add Case and Redaction Info",
      caption: "Follows the layout of the existing system where both the case and the redaction are entered on one page - uses a lot more dropdowns and has more info on the page compared with the more traditional version. Usually this wouldn't be the way to go, however these are 'expert' users and they are used to entering info in this way. Would still need proper user testing",
       img: { src: "other2.png" }
    },
            {
          text: "3. Hybrid Version - Check answers",
      caption: "",
       img: { src: "other3.png" }
    },
            {
          text: "4. Hybrid Version - Confirmation",
      caption: "",
       img: { src: "other4.png" }
    },
            {
          text: "5. Hybrid Version - Search Report and Results",
      caption: "Uses the same filters are the current version but uses the GDS styling. The current version shows all the report fields in the search results, but can't do this without horizontal scrolling which is not ideal. This version suggests that we find out the most important fields and only show those. Other fields are availble if the user clicks the 'view' link to see more",
       img: { src: "other5.png" }
    },
            {
          text: "6. Report Details",
      caption: "Shows the rest of the info for the redaction report once the 'view button' is clicked",
       img: { src: "other6.png" }
    }

  ]
}) }}



<!-- ## User research -->
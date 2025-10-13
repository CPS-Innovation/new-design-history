---
title:  Multiple defendants
description: Sketches of a GDS design version of redaction log
date: 2022-06-01
---

* In magistrates courts over 90% of cases only have one defendant, our original design worked well for this scenario but we needed to update the design to handle multiple defendants - which could be up to 15 defendants in a crown court case (although this number of defendants is very unusual)

* We tried 3 different versions with users. The version with a list of names and a link to more info was the one that best met user needs.

* All the versions open a new tab in the main window with the additional details about the defendants.


<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
      text: "1. Original version - 1 defendant",
       caption: "<br/>- This is the version we currently use for one defendant. Trying to add all this info into the left hand window would become too unwieldy if there were a lot of defendants.
       ",
       img: { src: "1.jpeg" }
    }, 
    {
      text: "2. A link to view all defendants",
        caption: "The first version simply had a link that opened all the details of the defendants in the main window viewer. This didn't work because users wanted to be able to quickly identify which case they were in - and do this by using the defendants name - when they had multiple cases open.",
        img: { src: "2.jpeg" }
    },
        {
      text: "3. Link to view all defendants and the name of the lead defendant",
       caption: "We added the name of the lead defendant to help users identify which case they were looking at. However they generally fed back that they would want to see all defendants in the case.
        ",
        img: { src: "3.jpeg" }
    },
            {
      text: "4. Link to view all defenants and the name of all the defendants",
       caption: "Users can easily identify which case they are in, and which defendants are part of the case. A link to view more information in the main window is under the names. There was a discussion about needing age or date of birth, but users would always have to click to see additional info such as the charges, it made little difference if that info was with the names in the left hand menu.",
        img: { src: "4.jpeg" }
    },

                {
      text: "5. Defendants and charges list",
       caption: "This tested well from the beginning and was largely unchanged except for formatting to reflect that some charges would have different statuses.",
        img: { src: "5.jpeg" }
    }
            

  ]
}) }}



<!-- ## User research -->
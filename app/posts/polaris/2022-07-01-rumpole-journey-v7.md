---
title:  Scrolling
description: How does the window scroll the navigation and the main content window to maximise space for content
date: 2022-08-01
tags: polaris
---

* We want to find a way to maximise the vertical screen real estate given over to case information - making sure that the service focuses on the important content.

* The original version of the service used a fixed height and the left hand navigation and content scrolls within the fixed window. The problem with this is that on small screen the interface elements at the top of the screen use up valuable space that should be used for content - the top bar and in future any top navigation. On smaller screens this can impact on the legibility of the documents as vertical space is limited.




<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
      text: "1. Original version - fixed screen",
       caption: "<br/>- The original version. With two scrollbars for the left hand nav and the main content window. Works well on larger screens but when height is limited the additional space at the top - the black bar, navigation, tabs and filename could be used to show more content.
       ",
       img: { src: "2.jpeg" }
    }, 
    {
      text: "2. Scroll the whole page",
        caption: "This version scrolls the whole page rather than individual panels. We thought there may be an issue with very long pages and the user not having the list of files available as they scrolled down but in practice this didn't seem to be a big issue with users. This version solves the problem of restricted vertical space on smaller screens, and gives more space for content on larger screens. <br /><br/>This would be a preferered version, however there are some technical issues with making this work with redaction - because the redaction process needs to know x and y coordinates and these change if the whole page scrolls.",
        img: { src: "1.jpeg" }
    },
        {
      text: "3. Allow the whole screen to scroll and panels scroll",
       caption: "This version is a hybrid of the other two and has worked in testing. When a user opens a file the screen scrolls down so that the top bar and navigation are not visible. Users can then interact with the content and the navigation using the individual scrollbars as in verson 1. <br /> <br /> When the user scrolls the document all the way back to the top, the page will continue to scroll up to reveal the navigation and top bar. <br /> <br /> This seems to work well but will need more testing when/if we start using a top navigation to make sure users don't miss the navigation options.
        ",
        img: { src: "3.jpeg" }
    }

            

  ]
}) }}



<!-- ## User research -->
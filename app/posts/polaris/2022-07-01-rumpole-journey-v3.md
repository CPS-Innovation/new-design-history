---
title:  Rumpole journey with round 2 updates
description: Sprint 3 updated journey
date: 2022-02-01
---

* This is the third draft of a journey that starts with searching for a case file URN, allows users to find that case and open all the documents related to that case in a case viewer.

* We made several changes to version 2 based on user feedback. 
* This version still contains 2 versions of search - one that opens results in a modal window and another that opens in a tab. We haven't decided yet which one works better for users.

<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "Start",
       caption: "The start page. Users can only search by case URN in the first version. At some point in the future they will be able to search using other criteria (such as names or dates). <br /><br /> <b>User Research</b><br /><br />A couple of users mentioned wanting to search for names and URNs being a 'last resort'"
    }, 
    {
      text: "Search results",
       caption: "<br/>- Results of a case URN search. The only results will be an exact match to the URN. Cases can be split so there maybe multiple results.
       - This version has an extra status filter to allow finalised cases to be split from charged but not finalised.
       - We have added new data fields - the design can now accomodate a to and from date and multiple offences under the same URN <br /><br /> <b>User Research</b><br /><br />t.b.c"
    }, 
    {
      text: "Casefile scroll",
        caption: "<br/>- When the user clicks a case from the search page they land here.
        - The charges and the case files are listed in the accordions on the left hand side. When the user clicks an accordion it opens to reveal the case files within.
          - The page structure has changed to that the whole page scrolls rather than individual windows, this allows us to use the full vertical space for the document (some users have very small screens and this helps give the docs more space)
        - Forensics has been removed (will go on exhibits) and communications has been added
        - A label has been added to the search bar<br /><br /> <b>User Research</b><br /><br />t.b.c "
    },
        {
      text: "Casefile scroll open",
       caption: "<br />- The page has been rearranged to give the documents window more vertical space
       - The nav scrolls in the whole window rather than in its 'frame'<br /><br /> <b>User Research</b><br /><br />
        "
    },
            {
      text: "Casefile scroll onedoc",
       caption: "If the user opens mulitple case files, they open in multiple tabs
       - The full filename is at the top of the document<br /><br /> <b>User Research</b><br /><br />Users understood this"
    },
                {
      text: "Casefile search modal",
      caption: "When the user searches, the search results will open in a modal window. Clicking a result will close the window and open a new tab with the result in it
      - Search has a new set of filters for category as well as doc type<br /><br /> <b>User Research</b><br /><br /> t.b.c "
    },
    {
          text: "Casefile scroll search result",
      caption: "The search results bar at the top has been tweaked to add a 'back to search results' option<br /><br /> <b>User Research</b><br /><br /> t.b.c "
    },
        {
          text: "casefile scroll search tab",
      caption: "When the user searches, the search results will open in a new tab. Clicking a result will open a new tab with the result in it. The search results will remain in a tab
      - The tab name is a larger font and bold to help it stand out when lots of tabs are open<br /><br /> <b>User Research</b><br /><br /> t.b.c "
    },
            {
          text: "casefile scroll backtotop",
      caption: "When users scroll down a 'back to top' button will appear to help them quickly return to the top of the page without scrolling</b><br /><br /> t.b.c "
    },
                {
          text: "casefile scroll search tab highlight",
      caption: "The active tab will highlight when clicked.</b><br /><br /> t.b.c "
    }
  ]
}) }}



<!-- ## User research -->
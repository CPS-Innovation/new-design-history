---
title: Updated Rumpole journey with search
description: Sprint 2 updated journey
date: 2022-01-07
---

* This is the second draft of a journey that starts with searching for a case file URN, allows users to find that case and open all the documents related to that case in a case viewer.

* We made several changes to version 1 based on user feedback. 
* This version also contains 2 versions of search - one that opens results in a modal window and another that opens in a tab.

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
       caption: "The start page. Users can only search by case URN in the first version. At some point in the future they will be able to search using other criteria (such as names or dates). This version has 'and Wales' added to the content."
    }, 
    {
      text: "Search results",
       caption: "<br/>- Results of a case URN search. The only results will be an exact match to the URN. Cases can be split so there maybe multiple results.
       - This version has an extra status field to make it clearer which cases are charged and not charged.
       - There is also a subtle change to the filter design - some of the keylines have been removed <br /><br /> <b>User Research</b><br /><br />works well. Needs addional status in filter for finalised. Users also want date of offence on the charged results. Also new info about data means we need to accomodate multiple names, offences and a to and from date"
    }, 
    {
      text: "Case file empty",
        caption: "<br/>- When the user clicks a case from the search page they land here.
        - The charges and the case files are listed in the accordions on the left hand side. When the user clicks an accordion it opens to reveal the case files within.
        - Case files and exhibits have been combined
        - Search has been moved above the case<br /><br /> <b>User Research</b><br /><br />Working well, but want to remove forensics (and put into exhibits) + add a new folder for communications. We also want to test a version that scrolls down the page giving more space at the top for the document (important on smalls screens) "
    },
        {
      text: "Case file tab1",
       caption: "<br />- Selected cases are shown in the main part of the window, one tab per case file. If the user clicks the case again it goes back to the same tab (rather than reopening the tabs)
       - The page has been rearranged to give the documents window more vertical space<br /><br /> <b>User Research</b><br /><br />Tabs worked well
       - The font size in the tab label has been reduced to 16px "
    },
            {
      text: "Case file mulitple",
       caption: "If the user opens mulitple case files, they open in multiple tabs<br /><br /> <b>User Research</b><br /><br />Users understood this"
    },
                {
      text: "Case file scroll",
      caption: "If the user opens more tabs than will fit in the tab bar, the tab bar will become scrollable<br /><br /> <b>User Research</b><br /><br /> Users understood this "
    },
    {
          text: "Case file search modal",
      caption: "When the user searches, the search results will open in a modal window. Clicking a result will close the window and open a new tab with the result in it<br /><br /> <b>User Research</b><br /><br /> Users understand this, BUT they don't know how to get back to the results "
    },
        {
          text: "Case file search tab",
      caption: "When the user searches, the search results will open in a new tab. Clicking a result will open a new tab with the result in it. The search results will remain in a tab<br /><br /> <b>User Research</b><br /><br /> Users understand this, but don't always get back to the tab if there are a lot of tabs and they have scrolled "
    },
            {
          text: "Case file search file open",
      caption: "Search results tab have an additional blue bar at the top that tells the user how many results are found in that document and a 'previous/next' navigation that will allow them to move between the results on that page.<br /><br /> <b>User Research</b><br /><br /> Generally works well but don't always understand what the previous and next buttons do, sometime think they go to the next document. Maybe change the copy to make it clearer"
    }
  ]
}) }}



<!-- ## User research -->
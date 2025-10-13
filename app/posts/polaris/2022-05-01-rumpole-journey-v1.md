---
title: Rumpole journey v1
description: First draft of a search and view case file journey
date: 2022-01-06
---

This is the first draft of a journey that starts with searching for a case file URN, allows users to find that case and open all the documents related to that case in a case viewer. There is no searching in the case files in this version.

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
       caption: "The start page. Users can only search by case URN in the first version. At some point in the future they will be able to search using other criteria (such as names or dates)<br /><br /> <b>User Research</b><br /><br />This page tested well, except we need to add 'and Wales' to the content"
    }, 
    {
      text: "Search results",
       caption: "Results of a case URN search. The only results will be an exact match to the URN. Cases can be split so there maybe multiple results. <br /><br />In this version the only differentiation between not yet charged and charged was in the date title - Date of offence vs Court hearing. <br /><br />When clicked the filters will show only the cases that match the filter.<br /><br /> <b>User Research</b><br /><br />The user wasn't clear which cases were charged/not charged, it needs to be clearer"
    }, 
    {
      text: "Case file empty",
        caption: "When the user clicks a case from the search page they land here.<br /><br />The charges and the case files are listed on the left hand side. When the user clicks a case file it will open in the main part of the window. <br /><br /> Case files and exhibits are seperated into tabs on the left hand side, clicking either updates the list of files.<br /><br /> <b>User Research</b><br /><br />Users wanted exhibits to be part of the case files<br /><br />The order of the case files need to change.<br /><br />Screen size that some of our users are using is closer to 1200x600 which is smaller than we expected. We need to make the most of the screen real estate for the cases rather than the interface. "
    },
        {
      text: "Case file tab1",
       caption: "Selcted cases are shown in the main part of the window, one tab per case file. If the user clicks the case again it goes back to the same tab (rather than reopening the tabs)<br /><br /> <b>User Research</b><br /><br />Tabs worked well "
    },
            {
      text: "Case file tab multiple",
      img: { src: "case-file-tab-multiple.png" },
       caption: "If the user opens mulitple case files, they open in multiple tabs<br /><br /> <b>User Research</b><br /><br />Users understood this"
    },
                {
      text: "Case file tab scroll",
      caption: "If the user opens more tabs than will fit in the tab bar, the tab bar will become scrollable<br /><br /> <b>User Research</b><br /><br /> Users understood this "
    }
  ]
}) }}




## Iterations
This is the first iteration of this journey

<!-- ## User research -->
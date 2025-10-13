---
title:  Evolution of Redaction
description: The evolution of the redaction function from v5 to v6
date: 2022-03-07
---

* We have made several versions of the redaction prototype and it has changed significantly from where we started with our early assumptions and hypothesis.

* We initially started with redaction being a seperate process from case review - and it sitting in a new tab - because users often treat it as a seperate process. But, we quickly realised that this was only the case because the current system made it very difficult to make redactions as you went along. When we realised this we integrated the main redaction function into the case review page.
* The seperate page for redaction has changed from being the whole redaction process to a confirmation and finally a place where suggestions from our ML are presented.

<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
    {
      text: "1.0 Redaction",
       caption: "Our first attempt at a redaction concept. We started with the idea of matching the existing process - users don't generally redact as they go but make a note or a tag of where they want to redact and come back later to the note to redact it. We quickly realised that they reason they do this is that it is really awkward to make a redaction with the current system - so if they were to try and redact as they go along it would  break them out of their thought process. <br /><br /> <b>User Research</b><br /><br />Didn't really work, the ideal would be to redact as you go without being broken out of the current task ",
       img: { src: "redaction1.png" }
    }, 
    {
      text: "1.1 Redaction, make the redaction",
       caption: "<br/>- The idea was to show users what they had tagged in the context of the document and get them to confirm if they want to redact or not.
  <br /><br /> <b>User Research</b><br /><br />There was no real need for the second step, users would prefer to redact as they go",
       img: { src: "redaction1.1.png" }
    }, 
    {
      text: "2.0 Review the redactions",
        caption: "We changed the system to allow users to redact as they go along (see below for this process) but kept the idea of being able to review and check all the redactions that had been made as well as viewing suggested redactions from our ML system.<br /><br /> <b>User Research</b><br /><br />Users weren't that keen on being able to see all the redactions that had been made to the case file in one place, there isn't really a reason to do it. We had mixed messages about how useful the ML suggestions would be and what they would be showing.",
        img: { src: "redaction2.png" }
    },
        {
      text: "2.1 Review redaction",
       caption: "This page was intended to allow users to review the redaction that had been made and decide whether to keep or remove it.<br /><br /> <b>User Research</b><br /><br />Users didn't really want to do this, once it had been made they did not see a need to be able to see all the redactions and/or edit them.
        ",
        img: { src: "redaction2.2.png" }
    },
            {
      text: "3.0 Redaction suggestions",
       caption: "The seperate tab has been scaled back and renamed 'redaction suggestions' - it is now only used for the ML suggested redactions which users can interact with if they wish.<br /><br /> <b>User Research</b><br /><br />This makes more sense to be just ML suggestions, although we have mixed messages about the usefulness of this and whether they will use it or not.",
        img: { src: "redaction3.png" }
    },
    
                {
      text: "3.1 View the suggestion",
      caption: "This has been changed to embed the pdf document in the page. Users were expecting to be able to redact by swiping the text (as they can in the case file) and sometimes need to do a partial redaction - e.g. on a telephone number - so a simple yes or no to redeact something would not work.<br /><br /> <b>User Research</b><br /><br /> t.b.c ",
      img: { src: "redaction3.2.png" }
    },
     
    {
          text: "4.0 Redaction in the case file",
      caption: "Users can redact any content directly in the case file as they are viewing a document. Swiping text brings up a green redaction control, if they click this it will redact the highlighted content.</b><br /><br /> So far this seems to be working well. ",
         img: { src: "redaction4.png" }
    },
  
        {
          text: "4.1 Confirm redaction",
      caption: "Once the user has finished redacting the document, they will click 'save all redactions'. This will commit the redactions back to the datebase.<br /><br /> <b>User Research</b><br /><br /> This seems to be working well so far",
       img: { src: "redaction4.1.png" }
    },
            {
          text: "4.2 Undo redaction",
      caption: "Before the 'save all redactions' button is pressed, users can remove the redaction by hovering over the redacted copy and clicking the green 'remove redaction' button.</b><br /><br /> This seems to be working well so far",
       img: { src: "redaction4.2.png" }
    }

  ]
}) }}



<!-- ## User research -->
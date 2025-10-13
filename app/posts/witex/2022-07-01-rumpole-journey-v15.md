---
title:  Travel variations
description: Variations on asking for how users travelled and how they can claim expenses for this
date: 2023-01-15
---

* Users can claim for their travel expenses. The rules are slighlty different for each mode of transport. Some need receipts, some don't and there are criteria that change how much a user can claim e.g. for mileage.


<!-- ## User needs

<b>As a prosecuter </b>
I need to find a case<br />

<b>As a prosecuter </b>
I need to do the thing<br /> -->



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [

    {
       text: "1a. Choose which transport",
       caption: "First draft, a simple list of everything users can claim for. Can choose all that apply to create a travel journey.  <br /><br /> <b>User Research</b><br /><br />Seemed ok, but a bit long. Users didn't have a preference for order, were fine with most popular, alphabetical etc. ",
      img: { src: "1.png" }
    },
        {
       text: "1b. Choose which transport",
       caption: "Grouping public transport together  <br /><br /> <b>User Research</b><br /><br />Users liked this as it simplified the number of options. We ended up not using it because a clarified policy meant there were differences in how receipts were handled depending on the transport that was used.",
      img: { src: "2.png" }
    },
        {
       text: "1c. Choose which transport",
       caption: "We clarified the policy around which journeys needed receipts which led us to break out some of the options again. trains need receipts, however overground, DLR etc in London that could be classified as a train does not so we broke them out and attempted to make them clearer.  <br /><br /> <b>User Research</b><br /><br />Users understand the options and can choose the ones relevent to them",
      img: { src: "3.png" }
    },
        {
       text: "2a. How much did you spend in total",
       caption: "This option asks users to put a total amount for a rail journey (or coach etc) rather than splitting out all the individual pieces of the journey. This means the user needs to total these up.  <br /><br /> <b>User Research</b><br /><br />Users preferred this option to splitting out each journey and putting amounts for each journey in individually.",
      img: { src: "4.png" }
    },
        {
       text: "2b. How much did you spend per journey",
       caption: "This variation asks the users to input each journey in seperately and we would add the amount up for them. We would use the MOJ pattern used elsewhere in the service for multiple entries.  <br /><br /> <b>User Research</b><br /><br />Users told us they preferred to put one number in rather than individual journeys.",
      img: { src: "5.png" }
    },
            {
       text: "2c. How much did you spend updated content",
       caption: "The policy was clarified so that users who do not have receipts could still claim if they had a good reason for not having a receipt - e.g. the ticket machine took it at the end of the journey. The variations on asking for these reasons is covered in another article.  <br /><br /> <b>User Research</b><br /><br />",
      img: { src: "6.png" }
    },
            {
       text: "3. Higher mileage",
       caption: "Users who used a car can claim a higher mileage rate if they meet certian criteria - mostly about not being able to use public transport or it being cheaper or quicker.   <br /><br /> <b>User Research</b><br /><br />The copy on the earlier versions was not clear enough and had to be refined several times. We also added a subtitle above the question to make it clearer to the user where they were in the journey after some users were confused by the jump from train to car.",
      img: { src: "7.png" }
    },
            {
       text: "4. Why claiming higher mileage",
       caption: "If the user chooses yes on the previous page they need to tell us their reason so that it can be checked if necessary.  <br /><br /> <b>User Research</b><br /><br />The copy matches the one on the previous page and needed to be revised several times to make it clearer and to make sure the reasons weren't too wide.",
      img: { src: "8.png" }
    },
            {
       text: "5. Additional witnesses",
       caption: "Users get additional pence per mile for taking other witnesses to the court.  <br /><br /> <b>User Research</b><br /><br />This needed to be revised several times to make it clearer exactly who could be claimed for.",
      img: { src: "9.png" }
    },
            {
       text: "6. How many additional witnesses",
       caption: "  <br /><br /> <b>User Research</b><br /><br />This is clear",
      img: { src: "10.png" }
    },
            {
       text: "7. How many miles",
       caption: "We tell users how much they will be able to claim per mile and ask how many miles they want to claim for.  <br /><br /> <b>User Research</b><br /><br />In UR most users told us they would either know roughly how many miles the trip would be or they would go to google maps to find out, so we put a link to google maps to make it easier. Most users told us they would be able to enter this information and they understood it would be a round trip.",
      img: { src: "11.png" }
    },
            {
       text: "8. Parking",
       caption: "For users to claim for parking. We changed the receipt copy to reflect a change in the policy to allow users with a good reason to tell us why they do not have a receipt. <br /><br /> <b>User Research</b><br /><br />Users understood this page. ",
      img: { src: "12.png" }
    },
            {
       text: "9. How much did you pay for parking",
       caption: " We changed the receipt copy to reflect a change in the policy to allow users with a good reason to tell us why they do not have a receipt. This page is changed in a later version to bring the reasons for not having a receipt into this page.<br /><br /> <b>User Research</b><br /><br />Users understood this page",
      img: { src: "13.png" }
    },
            {
       text: "10. Other driving costs",
       caption: "Users can claim for other costs such as ULEZ and tolls  <br /><br /> <b>User Research</b><br /><br />Users understood this page, and understood that they could not claim for penalties/fines.",
      img: { src: "14.png" }
    },
            {
       text: "11. Enter other driving costs",
       caption: "We used the MOJ add another thing pattern on this page so the user can add as many other costs as they want. <br /><br /> <b>User Research</b><br /><br />Users understood this page",
      img: { src: "15.png" }
    },
                {
       text: "12. Taxi reason",
       caption: "Users need a good reason to take a taxi. The 3 main reasons were called out at the time to make it easier for users, but there is still a space for 'edge case'  reasons to be entered. These reasons will be at the discretion of the wakefield team <br /><br /> <b>User Research</b><br /><br />This option was iterated several times and users understand it.",
      img: { src: "16.png" }
    },
        {
       text: "13. How much was your taxi",
       caption: "The receipt copy was changed a few times based on policy updates and to make it clearer to users what we were asking for. The page has changed in later versions to bring the reasons into the page.  <br /><br /> <b>User Research</b><br /><br />Users understood this page and preferred to put a total amount in rather than individual journeys.",
      img: { src: "17.png" }
    }
       
        
          
  ]
}) }}



<!-- ## User research -->
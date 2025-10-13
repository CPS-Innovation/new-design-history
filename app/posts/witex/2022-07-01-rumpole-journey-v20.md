---
title:  Childcare updates
description: We updated and simplified the childcare section based on UR.
date: 2023-01-20
---

* We updated and added new sections to this based on policy and UR.


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
       caption: "We made the content on this page clearer and simpler. Users who don't know if there childcare provider is ofsted registered can check on the Ofsted website.  <br /><br /> <b>User Research</b><br /><br />Clear",
      img: { src: "1.png" }
    },
        {
       text: "2. Ofsted registered? Yes",
       caption: "Branching users to the correct amount page  <br /><br /> <b>User Research</b><br /><br />Clear.",
      img: { src: "2.png" }
    },
            {
       text: "3. Enter amount paid ",
       caption: "Users can claim for the full cost of childcare from an Ofsted registered provider, as long as they have a receipt. <br /><br /> <b>User Research</b><br /><br />Clear",
      img: { src: "3.png" }
    },
            {
       text: "4. Ofsted registered? No",
       caption: "",
      img: { src: "2b.png" }
    },
            {
       text: "5. Enter amount you paid",
       caption: "Users can only claim £67 per day because their child was not looked after by a Ofsted registered childminder. They will still need a receipt for this   <br /><br /> <b>User Research</b><br /><br />Clear",
      img: { src: "3b.png" }
    }
       
        
          
  ]
}) }}



<!-- ## User research -->
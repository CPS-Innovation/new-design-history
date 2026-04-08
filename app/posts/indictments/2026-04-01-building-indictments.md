---
title: Redesigning how prosecutors build indictments
date: 2026-04-01
---

## Why we did this work

The Crown Prosecution Service's existing Case Management System (CMS) requires prosecutors to build indictments through a process that is widely regarded as frustrating, error-prone, and poorly supported by technology.

Prosecutors operate under extreme pressure. Many carry over 100 active cases simultaneously, and the accuracy of an indictment is non-negotiable.

A single error can risk a case.

We set out to understand how prosecutors actually build indictments and to explore how a new digital tool could better support that process.

## What we did

We ran three rounds of user research with 17 Senior Crown Prosecutors, including 2 from SEOCID and one Advocate, moving from discovery interviews through co-creative design sessions to end-to-end prototype testing.

The work spanned both discovery and alpha aspects.

We started by trying to understand how prosecutors build indictments before committing to any design direction, then moved into building and testing prototypes to challenge our assumptions and find out what worked.

| Round | Participants | Method | Focus |
|---|---|---|---|
| R1 (Jan 2026) | 4 | Discovery interviews | Understanding ways of working |
| R2 (Jan–Feb 2026) | 6 | Co-creative sessions | Testing sequential design concepts |
| R3 (Feb 2026) | 8 | End-to-end prototype testing | Task-based testing of two prototype variants |

## What we learned from discovery - Round 1

Discovery interviews revealed three core insights that shaped everything that followed.

### Value work happens outside the system

Before opening CMS, prosecutors have already reviewed evidence, decided which charges to include, planned count-ordering strategy, and identified what belongs on a Section 51 schedule.

Decisions are made in the prosecutor's head, sometimes on paper, before they ever open the indictment tool. The existing system then forces them to re-enter those decisions manually, adding no value, only friction.

### The current system actively impedes users

Prosecutors need to work across three separate systems simultaneously (CMS Classic, CMS Modern, and Polaris) with no ability to copy and paste between them.

The search function, central to finding offence codes, precedents, and legislation, was described as "Problem No. 1". Particulars templates were incomplete, out of date, or sometimes incorrect.

Changes made to the Word version of an indictment were not reflected in CMS, creating version control risks with real legal consequences.

### Users are expert at working around broken tools

Prosecutors have developed extensive personal workarounds: paper diaries, notebooks, and external legal references such as Archbold and PNLD.

They manually spell-check at the end of the process. Their effectiveness depends on their own expertise and memory, not the system.

From these findings, we identified three assumptions to test in Round 2:

- Users need a checklist to monitor task progress.
- Users need a clear visual link between charges and the counts derived from them. What later proved to be a big assumption emerged; all prosecutors simply take the charges and 'convert' or 'transpose' them into the equivalent of a count.
- Users need a count creation tool that can reference offence details and offers flexible count reordering.

## What we did in Round 2 co-creative sessions

We ran co-creative sessions using static screen designs to simulate a sequential workflow. Across three iterations with six participants, we tested and refined the designs in response to direct user feedback.

### Iteration 1

Four participants tested an 11-screen sequential flow. Users were broadly positive about the direction but raised significant concerns about workflow logic, screen ordering, and information density. Key needs that emerged included:

- Seeing all charges at a glance, including discontinued ones, with associated dates.
- A search function supporting wildcards, with links to the relevant legislation.
- The ability to manually enter an offence statement when the database falls short.
- Flexibility to create more than one count per charge, and to create counts not directly tied to any charge.

### The checklist

This was the most notable assumption we tested. All participants approved of the concept in principle, seeing value in a structured progress indicator. They disagreed on what it should contain, what order it should follow, and how they would actually use it in practice. We parked this idea for future consideration.

### Iterations 2 and 3

One participant each refined the workflow order, particularly when defendants are assigned to counts, and introduced a declaration screen asking users to confirm the indictment had been fully checked.

Responses were noticeably more positive, though the declaration was described as "a little annoying" while being understood in principle.

One thing stood out across iterations: regardless of where we positioned the screen for selecting defendants, users paused at that point and appeared uncertain or unsatisfied. This happened consistently enough to suggest something deeper than a sequencing problem.

Prosecutors are accustomed to completing all of these steps on a single screen, in whatever order suits them — and they are likely unaware of the order in which they do it. Breaking those actions into a linear sequence forced them to examine their own process for the first time, and that friction showed.

A key takeaway from Round 2 was that simple cases and complex multi-handed indictments make very different demands on the workflow. A design that works for one may not easily work for the other.

## What prototype testing showed us - Round 3

Our working hypothesis for Round 3 was that giving users tools to manage some of their value work inside the new tool would make the experience easier and more intuitive.

That hypothesis turned out to be false.

### Prototype version 1

The first prototype was built on the detailed findings from rounds 1 and 2, with a structured 16-screen sequential flow. The response from the first four participants was strikingly negative.

Users described it as too rigid, too repetitive, and too demanding. One participant expressed frustration at needing 14 or more screens to create a single count.

The enforced sequence clashed with their established ways of working and felt alien to their mental models.

The failure was still useful. By placing users in a flow that felt so at odds with their expectations, it produced unusually clear articulation of what they actually needed:

- A fast route to assembling an indictment with the minimum number of steps and clicks.
- Auto-population of details (dates, defendants, victims) when a count is based on an existing charge.
- Flexibility to create counts in any order, with the ability to duplicate or remove them easily.
- A single review point, not multiple check-your-answer screens.

### Prototype version 2

We substantially reduced the number of screens by removing the "Build Indictment" section and some of the intermediate review steps. We also gave users flexibility to work non-linearly by implementing the [task list](https://design-system.service.gov.uk/components/task-list/) component.

Three of the four participants were positive and asked when the tool would be ready. Feedback shifted from fundamental objections to constructive suggestions about additional features, such as count duplication and defendant ordering.

One participant, a committed CMS user, remained critical and wanted everything on a single screen with full auto-population. There is a spectrum of mental models and working styles across prosecutors that no single design will perfectly satisfy.

**Auto-population** was a recurring theme throughout version 2 testing. Users did not always use the word explicitly, but their behaviour and responses consistently indicated an expectation that selecting a charge should automatically pull through its associated dates, defendants, and victims.

What users described as their ideal experience was one of review and validation, not manual data entry.

The drag-and-drop reordering design for counts was near-universally rejected by version 2 participants as potentially unwieldy for complex indictments. Version 1 users had been evenly split on this; version 2 users were almost unanimous in their dislike.

## What we learned overall

Across all three rounds, we can summarise what prosecutors need in a single hypothesis:

> As a Senior Crown Prosecutor, having completed my review of the case file and arrived at my decisions on what the indictment should contain, I need a rapid assembly line to help me find the right offence codes for all counts, with case details including defendant, victim, and dates auto-populated, so that my primary task is one of review and edit to produce the final indictment for checking and serving.

The process of physically building an indictment needs to be fast, precise, and low-friction. Any significant cognitive work is already done before the tool is used.

## What we could do next

Further prototype testing is needed to address gaps not yet fully explored:

- The optimal design for constructing and populating offence and particulars fields, given the diversity of user needs.
- A workable approach to count reordering for complex, multi-count indictments.
- Section 51 handling, a binary conditional process that may be a strong candidate for an automated or AI-assisted approach.
- Spelling and grammar checking integrated throughout drafting, not only at the end.
- How auto-population interacts with editing existing indictments, including adding, removing, and duplicating counts.
- Usability and accessibility of the emerging design.

What we have learned points toward where emphasis should lie: offence code search, auto-population of structured case data, and supporting review rather than input. Indictments may also be a candidate for some exploration of an AI-powered approach, yet to be determined.

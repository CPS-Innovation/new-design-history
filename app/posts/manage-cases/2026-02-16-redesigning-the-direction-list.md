---
title: Redesigning the direction list
date: 2026-02-16
---

Directions are court orders that must be completed by a specific deadline. Unlike tasks, directions are fixed obligations that carry legal consequences if missed.

The direction list gives users a way to see all directions they're responsible for and act on the ones that need attention.

The current direction list has [similar problems to the task list](/manage-cases/redesigning-the-task-list/).

We redesigned the direction list to address these problems.

## How it works

Users get to the direction list by clicking "Directions" in the main navigation.

The list is pre-filtered so paralegal officers and prosecutors only see directions for the cases they're assigned to.

Directions are grouped by due date so the most urgent work is always at the top:

- Overdue
- Due today
- Due tomorrow
- Due this week
- Due later

Each direction card shows:

- direction description (as a link)
- status tag (if applicable)
- URN
- operation name (if applicable)
- defendant
- prosecutor
- paralegal officer
- due date
- assignee
- latest note (if applicable)
- custody time limit (if applicable)
- unit
- hearing date and type (if applicable)

We only show fields that have values, so there are no empty rows.

![The direction list for Rachael Harvey showing 21 directions filtered to her as paralegal officer, grouped under Overdue, Due today, Due tomorrow, Due this week, and Due later headings.](/manage-cases/redesigning-the-direction-list/rachael-default-filters.png)

### Filters

The filter panel is visible on the left side of the page, not hidden behind dropdowns.

There are 5 filter groups:

- Prosecutor - searchable list of prosecutors
- Paralegal officer - searchable list of paralegal officers
- Unit - the units the user belongs to
- Due - filter by when the direction is due
- Assignee - filter by defence or prosecution

When filters are cleared, the full list of directions across all units is shown.

![The direction list with no filters applied, showing 372 directions across all units.](/manage-cases/redesigning-the-direction-list/rachael-no-filters.png)

### Prosecutors

Prosecutors see the same page with the prosecutor filter defaulted to their own name.

![The direction list for Simon Whatley (a prosecutor) showing 19 directions filtered to him as prosecutor, grouped under Overdue, Due today, Due tomorrow, and Due later headings.](/manage-cases/redesigning-the-direction-list/simon-default-filters.png)

### Search

A search form above the results lets users search by direction description, URN, or defendant name. This is useful when users know what they are looking for.

![The direction list showing 3 results after searching for "CCTV", filtered to Rachael Harvey as paralegal officer, with directions grouped under Overdue and Due later headings.](/manage-cases/redesigning-the-direction-list/search.png)

## Future considerations

We want to consider merging tasks and directions into one list.

But tasks and directions are structured differently. For example:

- a task has three separate due dates, but directions only have one
- a task has an owner, but directions are indirectly assigned to the prosecutor and paralegal officer assigned to the case

So for now we’ve kept them separate.

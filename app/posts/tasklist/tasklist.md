---
override:tags: []
layout: collection
title: Choose a task
description: Viewing and choosing tasks
pagination:
  data: collections.tasklist
  reverse: true
  size: 50
permalink: "tasklist/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Choose a task
    key: tasklist
    excerpt: "{{ description }}"
    parent: home
---
---
override:tags: []
layout: product
title: Manage materials
description: Making it easier to find, organise and work with case materials
pagination:
  data: collections.manage-materials
  reverse: true
  size: 50
permalink: "manage-materials/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Manage materials
    key: manage-materials
    excerpt: "{{ description }}"
    parent: Home
---

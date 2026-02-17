---
override:tags: []
layout: collection
title: Manage materials
description: Making it easier to find, organise and work with case materials
pagination:
  data: collections.lcc
  reverse: true
  size: 50
permalink: "lcc/manage-materials/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Making it easier to find, organise and work with case materials
    key: manage-materials
    excerpt: "{{ description }}"
    parent: home
---

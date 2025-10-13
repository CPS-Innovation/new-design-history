---
override:tags: []
layout: collection
title: Allocate a case
description: Allocating cases to the lawyer
pagination:
  data: collections.allocate
  reverse: true
  size: 50
permalink: "allocate/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    title: Allocate a case
    key: allocate
    excerpt: "{{ description }}"
    parent: home
---